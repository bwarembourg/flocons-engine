var canvas = document.getElementById("flocons");
var ctx = canvas.getContext("2d");


function isSpriteInPos(sprite, pos) {
    return pos.x >= sprite.x && pos.x <= sprite.x + sprite.img.width
        && pos.y >= sprite.y && pos.y <= sprite.y + sprite.img.height;
}

function doSpritesCollide(sprite1, sprite2, margin) {
    return isSpriteInPos(sprite2, {x: sprite1.x + margin, y: sprite1.y + margin}) ||
    isSpriteInPos(sprite2, {x: sprite1.x + sprite1.img.width - margin , y: sprite1.y + margin}) ||
    isSpriteInPos(sprite2, {x: sprite1.x + margin, y: sprite1.y + sprite1.img.height - margin}) ||
    isSpriteInPos(sprite2, {x: sprite1.x + sprite1.img.width - margin, y: sprite1.y + sprite1.img.height - margin});
}

function getDistance(pos1, pos2) {
    x = Math.abs(pos2.x - pos1.x);
    y = Math.abs(pos2.y - pos1.y);
    return x + y;
}

function findSpriteById(id) {
    return currentScene?.sprites.find(s => s.id == id);
}

function findTextById(id) {
    return currentScene?.texts.find(t => t.id == id);
}

function findPrefabById(id) {
    const prefab = prefabs.find(p => p.objectsInScene.find(o => o.id == id));
    if (prefab) {
        prefab.idInScene = id;
    }
    return prefab;
}

function findById(id) {
    return findSpriteById(id) || findTextById(id) || findPrefabById(id);
}

function findByLayer(layer) {
    return currentScene?.sprites.filter(s => s.layer == layer);
}

function findByTag(tag) {
    return currentScene?.sprites.filter(s => s.tag == tag);
}

function getHighestSprite(sprites) {
    if (!sprites || sprites.length === 0)
        return null;
    sprites.sort((a, b) => b.layer - a.layer);
    if (sprites.length > 0)
        return sprites[0];
    return null;
}