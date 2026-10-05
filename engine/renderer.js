sprites = new Array();
spriteImgs = new Array();
spriteLoaded = 0;

function onLoadImg() {
    spriteLoaded++;
    if (spriteImgs.length == spriteLoaded) {
        draw();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#BDCCC5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();

    for(var i = 0; i <= 1000; i++) {
        layerSprites = sprites.filter(s => s.layer == i);
        for (let sprite of layerSprites) {
            sprite.update();
            ctx.drawImage(sprite.img, sprite.x, sprite.y);
        }
    }
    setTimeout(draw, 1000/60); // 60fps
}