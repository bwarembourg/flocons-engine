var canvas = document.getElementById("flocons");
var ctx = canvas.getContext("2d");


function isSpriteInPos(sprite, pos) {
    return pos.x >= sprite.x && pos.x <= sprite.x + sprite.img.width
        && pos.y >= sprite.y && pos.y <= sprite.y + sprite.img.height;
}
