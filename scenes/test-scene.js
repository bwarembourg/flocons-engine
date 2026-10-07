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

        lm1.build();
    }

    update() {

    }
}