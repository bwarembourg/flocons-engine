class UIScene {
    constructor() {}

    setup() {
        new Sprite({
            id: 'test',
            layer: 9,
            tag: 'collectible',
            scene: this.scene,
            x: 900,
            y: 500,
            src: 'engine/sprite/default2.png',
            animations: [],
            object: null, 
            canCollide: false,
            marginCollider: 10,
            enabled: true
        });
    }

    update() {

    }
}