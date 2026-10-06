class TestPrefab {
    constructor(){}

    setupSprites () {
        const hero = new Sprite({
            id: 'hero',
            layer: 10,
            tag: 'hero',
            scene: null,
            x: 100,
            y: 100,
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
            x: 0,
            y: 0,
            src: 'engine/sprite/default2.png',
            animations: [],
            object: null, 
            canCollide: false,
            marginCollider: 10,
            enabled: true
        });
        return [hero, test];
    }

    setupTexts () {
        const coucouTxt = new TextSprite({
            id: 'coucou',
            text: 'coucou !',
            layer: 40,
            x: 100,
            y: 100,
            scene: null,
            blink: false,
            dial: false, 
            speed: 10,
            callback: this.callback,
            align: 'center', size: '30px', color: 'black', enabled: true
        });
        return [coucouTxt];
    }
}