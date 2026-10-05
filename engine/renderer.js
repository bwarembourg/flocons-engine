spriteImgs = new Array();
spriteLoaded = 0;

scenes = new Array();
currentScene = null;

function onLoadImg() {
    spriteLoaded++;
    if (spriteImgs.length == spriteLoaded) {
        currentScene = scenes.find(s => s.startingScene);
        currentScene.setup();
        draw();
    }
}

function draw() {
    // CLEAR
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //BG
    ctx.fillStyle = "#BDCCC5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();

    //SCENE
    if (currentScene) {
        currentScene.update();    
        for(var i = 0; i <= 1000; i++) {
            const layerSprites = this.currentScene.sprites.filter(s => s.layer == i);
            for (let sprite of layerSprites) {
                sprite.update();
                ctx.drawImage(sprite.img, sprite.x, sprite.y);
            }
        }
        currentScene.UI.update();
        for(var i = 0; i <= 1000; i++) {
            const uiLayerSprites = this.currentScene.UI.sprites.filter(s => s.layer == i);
            for (let sprite of uiLayerSprites) {
                sprite.update();
                ctx.drawImage(sprite.img, sprite.x, sprite.y);
            }
        }
    }

    setTimeout(draw, 1000/60); // 60fps
}

function changeScene(id) {
    var nextScene = scenes.find(s => s.id === id);
    if (nextScene) {
        currentScene.destroy();
        currentScene = nextScene;
        console.log(currentScene);
        currentScene.setup();
    }
}