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

function findById(id) {
    return sprites.find(s => s.id == id);
}

function findByLayer(layer) {
    return sprites.filter(s => s.layer == layer);
}

function findByTag(tag) {
    return sprites.filter(s => s.tag == tag);
}