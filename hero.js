class Hero {
    constructor() {}

    update() {}

    onkeydown(keys) {
        if (isKeyUp(keys)) {
            this.sprite.y -= 5;
        }
        if (isKeyDown(keys)) {
            this.sprite.y += 5;
        }
        if (isKeyLeft(keys)) {
            this.sprite.x -= 5;
        }
        if (isKeyRight(keys)) {
            this.sprite.x += 5;
        }
        if (isKeyOk(keys)) {
            this.sprite.setAnimationState('die');
        }
    }

    onmousedown(pos) {
        this.sprite.moveToXY(400, 400, 30, Motions.EASE_IN_OUT_BACK);
        console.log('byid test:', findById('test'));
        console.log('bylayer 10', findByLayer(10));
        console.log('bytag hero', findByTag('hero'));
    }
}