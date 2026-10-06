class Prefab {
    constructor(obj) {
        this.id = obj.id;
        this.object = obj.object;
        this.sprites = [];
        this.texts = [];
    }

    addToScene(obj) {
        if (this.object.setupSprites) 
            this.sprites = this.object.setupSprites();
        if (this.object.setupTexts)
            this.texts = this.object.setupTexts();

        this.sprites.forEach(sprite => {
            sprite.x = obj.x + sprite.initialX;
            sprite.y = obj.y + sprite.initialY;
            sprite.layer = obj.layer + sprite.initialLayer;
            sprite.scene = obj.scene;
            obj.scene.sprites.push(sprite);
        });
        this.texts.forEach(text => {
            text.x = obj.x + text.initialX;
            text.y = obj.y + text.initialY;
            text.layer = obj.layer + text.initialLayer;
            text.scene = obj.scene;
            obj.scene.texts.push(text);
        });
    }

    destroy() {

    }

}