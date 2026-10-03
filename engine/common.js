var canvas = document.getElementById("flocons");
var ctx = canvas.getContext("2d");


function isSpriteInPos(sprite, pos) {
    return pos.x >= sprite.x && pos.x <= sprite.x + sprite.img.width
        && pos.y >= sprite.y && pos.y <= sprite.y + sprite.img.height;
}

function getDistance(pos1, pos2) {
    x = Math.abs(pos2.x - pos1.x);
    y = Math.abs(pos2.y - pos1.y);
    return x + y;
}