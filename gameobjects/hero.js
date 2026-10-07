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
        if (MUSIC.isPlaying()) {
            MUSIC.pause();
        } else {
            MUSIC.play('sounds/test.mp3');
        }
        const prefab = findPrefabById('pr2');
        if (prefab) {
            prefab.destroy(prefab.idInScene);
        }
        this.sprite.moveToXY(400, 400, 60, Motions.EASE_IN_OUT_BACK, this.changeScene);
    }

    changeScene() {
        if (!MUSIC.isPlaying()) {
            MUSIC.resume();
        }
        changeScene('test2')
    }
}