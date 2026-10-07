class TestScene {
    constructor () {}

    setup() {
        SaveManager.get('hero');
        SaveManager.set('hero', 'coucou');
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

        testPrefab.addToScene({
            id: 'pr1',
            scene: this.scene,
            x: 300,
            y: 300,
            layer: 20
        });
        testPrefab.addToScene({
            id: 'pr2',
            scene: this.scene,
            x: 300,
            y: 0,
            layer: 20
        });
    }

    update() {

    }
}