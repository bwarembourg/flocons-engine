class Test2 {
    constructor() {}

    setup() {
        var hero = new Hero();
        new Sprite({
            id: 'hero2',
            layer: 10,
            tag: 'hero',
            scene: this.scene,
            x: 100,
            y: 100,
            src: 'engine/sprite/default2.png',
            animations: [idle, die],
            object: hero, 
            canCollide: true,
            marginCollider: 10,
            enabled: true
        });
        new TextSprite('bjr', 'bjr', 20, 100, 80, this.scene, true, false, 10);
        new TextSprite('bjr c boris ca va ?', 'bjr c boris ca va ?', 20, 200, 80, this.scene, false, true, 2, this.callback, 'left');
    }

    update() {

    }

    callback() {
    }

}