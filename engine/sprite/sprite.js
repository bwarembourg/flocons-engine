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
        // object update
        if (this.object.update) {
            this.object.update();
        }

        // animation
        if (this.animations && this.animations.length > 0) {
            this.img.src = this.animations.find(a => a.name === this.animationState)?.getImage();
        }

        //move
        if (this.moving) {
            this.x += this.percentMoving * (this.dest.x - this.initialPos.x);
            this.y += this.percentMoving * (this.dest.y - this.initialPos.y);
            if (getDistance(this.getCenterPos(), this.dest) <= 500 / this.speed) {
                this.moving = false;
                this.x = this.dest.x - this.img.width / 2;
                this.y = this.dest.y - this.img.height / 2;
            }
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

    onmousedown(pos) {
        if (this.object.onmousedown) {
            this.object.onmousedown(pos);
        }
    }

    onmouseup(pos) {
        if (this.object.onmouseup) {
            this.object.onmouseup(pos);
        }
    }

    onmousein(pos) {
        if (this.mousein)
            return;
        this.mousein = true;
        if (this.object.onmousein) {
            this.object.onmousein(pos);
        }
    }

    onmouseout(pos) {
        if (!this.mousein) 
            return;
        this.mousein = false;
        if (this.object.onmouseout) {
            this.object.onmouseout(pos);
        }
    }

    getCenterPos() {
        return {
            x: this.x + this.img.width / 2,
            y: this.y + this.img.height / 2
        }
    }

    moveToXY(x, y, speed) {
        if (this.moving) {
            return;
        }
        this.initialPos = this.getCenterPos();
        this.percentMoving = 1 / speed;
        this.dest = {x: x, y: y};
        this.speed = speed;
        this.moving = true;
    }

    moveToSprite(sprite, speed) {
        this.moveToXY(sprite.getCenterPos(sprite), speed);
    }

    destroy() {
        sprites.splice(sprites.indexOf(this), 1);
    }
}