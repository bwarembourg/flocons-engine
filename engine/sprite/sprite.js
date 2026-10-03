class Sprite {
    // x
    // y 
    // img
    // animations[]

    constructor(x, y, src, animations, object) {
        this.x = x;
        this.y = y;
        this.animations = animations;
        this.animationState = 'idle';
        this.img = new Image();
        this.object = object;
        this.object.sprite = this;
        this.img.src = src || 'engine/sprite/default.png';
        sprites.push(this);
    }

    update() {
        if (this.object.update) {
            this.object.update();
        }
        if (this.animations && this.animations.length > 0) {
            this.img.src = this.animations.find(a => a.name === this.animationState)?.getImage();
        }
    }

    onkeydown(keyState) {
        if (this.object.onkeydown) {
            this.object.onkeydown(keyState);
        }
    }

    onkeyup(keyState) {
        if (this.object.onkeyup) {
            this.object.onkeyup(keyState);
        }
    }

    destroy() {
        sprites.splice(sprites.indexOf(this), 1);
    }
}