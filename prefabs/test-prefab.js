class TestPrefab {
    constructor(){}

    setupSprites () {
        const hero = new Sprite({
            id: 'hero',
            layer: 10,
            tag: 'hero',
            scene: null,
            x: 0,
            y: 0,
            src: 'engine/sprite/default2.png',
            animations: [idle, die],
            object: null, 
            canCollide: true,
            marginCollider: 10,
            enabled: true
        });
        const test = new Sprite({
            id: 'test',
            layer: 9,
            tag: 'collectible',
            scene: null,
            x: hero.getCenterPos().x,
            y: hero.getCenterPos().y,
            src: 'engine/sprite/default2.png',
            animations: [],
            object: null, 
            canCollide: false,
            marginCollider: 10,
            enabled: true
        });
        return [hero, test];
    }
}