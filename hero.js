class Hero {
    constructor() {}

    update() {}

    onkeydown(keys) {
        if (isKeyUp(keys)) {
            this.sprite.y -= 10;
        }
        if (isKeyDown(keys)) {
            this.sprite.y += 10;
        }
        if (isKeyLeft(keys)) {
            this.sprite.x -= 10;
        }
        if (isKeyRight(keys)) {
            this.sprite.x += 10;
        }
        if (isKeyOk(keys)) {
            this.sprite.destroy();
        }
    }

    onmousedown(pos) {
        this.sprite.moveToXY(400, 400, 100);
    }
}