class Test2 {
    constructor() {}

    setup() {
        var hero = new Hero();
        new Sprite('hero', 10, 'hero', this.scene, 100, 100, 'engine/sprite/default2.png', [idle, die], hero, true, 10);
    }

    update() {

    }

}