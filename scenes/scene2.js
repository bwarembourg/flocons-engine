class Test2 {
    constructor() {}

    setup() {
        var hero = new Hero();
        new Sprite('hero2', 10, 'hero', this.scene, 100, 100, 'engine/sprite/default2.png', [idle, die], hero, true, 10);

        new TextSprite('bjr', 'bjr', 20, 100, 80, this.scene, true, false, 10);
        new TextSprite('bjr c boris ca va ?', 'bjr c boris ca va ?', 20, 200, 80, this.scene, false, true, 2, this.callback, 'left');
    }

    update() {

    }

    callback() {
    }

}