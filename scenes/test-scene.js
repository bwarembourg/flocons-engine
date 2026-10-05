class TestScene {
    constructor () {}

    setup() {
        var hero = new Hero();
        new Sprite({
            id: 'hero',
            layer: 10,
            tag: 'hero',
            scene: this.scene,
            x: 0,
            y: 0,
            src: 'engine/sprite/default2.png',
            animations: [idle, die],
            object: hero, 
            canCollide: true,
            marginCollider: 10,
            enabled: true
        });
        new Sprite({
            id: 'test',
            layer: 9,
            tag: 'collectible',
            scene: this.scene,
            x: 50,
            y: 50,
            src: 'engine/sprite/default2.png',
            animations: [],
            object: null, 
            canCollide: false,
            marginCollider: 10,
            enabled: true
        });
        //new Sprite('test', 9, 'collectible', this.scene, 50, 50, 'engine/sprite/default2.png', [], null);
    }

    update() {

    }
}