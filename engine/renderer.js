spriteImgs = new Array();
spriteLoaded = 0;

scenes = new Array();
currentScene = null;

prefabs = new Array();

function onLoadImg() {
    spriteLoaded++;
    if (spriteImgs.length == spriteLoaded) {
        currentScene = scenes.find(s => s.startingScene);
        if (currentScene)
            currentScene.setup();
        else 
            console.error("No starting scene found.");
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
            for (var sprite of layerSprites) {
                sprite.update();
                if (sprite.enabled) {
                    ctx.drawImage(sprite.img, sprite.x, sprite.y);
                }
            }
            const layerTexts = this.currentScene.texts.filter(s => s.layer == i);
            for (let text of layerTexts) {
                text.update();
                if (text.enabled) {
                    renderText(text);
                }
            }
            const scenePrefabs = prefabs.filter(p => p.objectsInScene.scene === this.scene);
            scenePrefabs.forEach(sp => sp.update());
        }

        // UI
        if (currentScene.UI) {
            currentScene.UI.update();
            for(var i = 0; i <= 1000; i++) {
                const uiLayerSprites = this.currentScene.UI.sprites.filter(s => s.layer == i);
                for (let sprite of uiLayerSprites) {
                    sprite.update();
                    if (sprite.enabled) {
                        ctx.drawImage(sprite.img, sprite.x, sprite.y);
                    }
                }
                const uiLayerTexts = this.currentScene.UI.texts.filter(s => s.layer == i);
                for (let text of uiLayerTexts) {
                    text.update();
                    if (text.enabled) {
                        renderText(text);
                    }
                }
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
        currentScene.setup();
    }
}

function renderText(text) {
    if (text.outlineColor && text.outlineWidth) {
         renderOutline(text);
         return;
    }
    ctx.font = text.size + " " + text.font;
    ctx.fillStyle = text.color;
    ctx.textAlign = text.align;
    ctx.fillText(text.text, text.x, text.y);
}

function renderOutline(text) {
    ctx.font = text.size + " " + text.font;
    ctx.textAlign = text.align;
    ctx.strokeStyle = text.outlineColor;
    ctx.lineWidth = text.outlineWidth;
    ctx.strokeText(text.text, text.x, text.y);
    ctx.fillStyle = text.color;
    ctx.fillText(text.text, text.x, text.y);
}