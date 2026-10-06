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

        console.log('add to scene', obj);
        this.sprites.forEach(sprite => {
            sprite.x = obj.x + sprite.initialX;
            sprite.y = obj.y + sprite.initialY;
            sprite.layer = obj.layer + sprite.initialLayer;
            sprite.scene = obj.scene;
            obj.scene.sprites.push(sprite);
        });
        console.log('scene now:', obj.scene)
    }

    destroy() {

    }

}