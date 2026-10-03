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
            x: this.pos.x + this.img.width / 2,
            y: this.pos.y + this.img.height / 2
        }
    }

    moveToXY(x,y, speed) {
        this.dest = {x: x, y: y};
        this.speed = speed;
        this.moving = true;
    }

    moveToXY(pos, speed) {
        this.moveToXY(pos.x, pos.y, speed)
    }

    moveToSprite(sprite, speed) {
        this.moveToXY(sprite.getCenterPos(sprite), speed);
    }

    destroy() {
        sprites.splice(sprites.indexOf(this), 1);
    }
}