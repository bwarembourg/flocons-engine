class Sprite {
    // x
    // y 
    // img
    // animations[]

    constructor(x, y, src, animations) {
        this.x = x;
        this.y = y;
        this.animations = animations;
        this.animationState = 'idle';
        this.img = new Image();
        this.img.src = src || 'engine/sprite/default.png';
        sprites.push(this);
    }

    update() {
        if (this.animations && this.animations.length > 0) {
            this.img.src = this.animations.find(a => a.name === this.animationState)?.getImage();
        }
    }

    destroy() {
        sprites.splice(sprites.indexOf(this), 1);
    }
}