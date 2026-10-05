class TestScene {
    constructor () {}

    setup() {
        var hero = new Hero();
        new Sprite('hero', 10, 'hero', this.scene, 0, 0, 'engine/sprite/default2.png', [idle, die], hero, true, 10);
        new Sprite('test', 9, 'collectible', this.scene, 50, 50, 'engine/sprite/default2.png', [], null);
    }

    update() {

    }
}