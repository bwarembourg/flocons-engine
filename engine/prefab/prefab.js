class Prefab {
    constructor(obj) {
        this.id = obj.id;
        this.object = obj.object;
        this.sprites = [];
        this.texts = [];
        this.objectsInScene = [];
        prefabs.push(this);
    }

    addToScene(obj) {
        if (this.object.setupSprites) 
            this.sprites = this.object.setupSprites();
        if (this.object.setupTexts)
            this.texts = this.object.setupTexts();
        
        this.objectsInScene.push({
            id: obj.id,
            scene: obj.scene,
            sprites: this.sprites,
            texts: this.texts
        });
        
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

    getItem(id, scene) {
        const obj = this.objectsInScene.find(oId => oId.scene === scene);
        return obj.sprites.find(s => s.id === id) || obj.texts.find(t => t.id === id);
    }

    update() {
        if (this.object?.update)
            this.object.update();
    }

    destroy(id) {
        const obj = this.objectsInScene.find(oId => oId.id === id);
        obj.sprites.forEach(s => s.destroy());
        obj.texts.forEach(t => t.destroy());
    }

}