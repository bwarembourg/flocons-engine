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

        new TextSprite({
            id: 'bjr',
            text: 'bjr',
            layer: 20,
            x: 100,
            y: 80,
            scene: this.scene,
            blink: true,
            dial: false, 
            speed: 10
        })

        new TextSprite({
            id: 'bjr2',
            text: 'bjr c boris ca va ?',
            layer: 20,
            x: 200,
            y: 80,
            scene: this.scene,
            blink: false,
            dial: true,
            speed: 2,
            callback: this.callback,
            align: 'left', size: '16 px', color: 'white', enabled: true
        });

        testPrefab.addToScene({
            scene: this.scene,
            x: 600,
            y: 300,
            layer: 20
        });
    }

    update() {

    }

    callback() {
    }

}