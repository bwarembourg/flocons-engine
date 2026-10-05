class Sprite {
    // id
    // layer
    // x
    // y 
    // img
    // animations[]
    // gameobject
    // can collide

    constructor(id, layer, tag, x, y, src, animations, object, canCollide, marginCollider) {
        this.id = id;
        this.layer = layer;
        this.tag = tag;
        this.canCollide = canCollide;
        this.marginCollider = marginCollider || 0;
        this.x = x;
        this.y = y;
        this.animations = animations;
        this.animationState = 'idle';
        this.img = new Image();
        if (object) {
            this.object = object;
            this.object.sprite = this;
        }
        this.img.src = src || 'engine/sprite/default.png';
        sprites.push(this);
        this.collides = new Map();
    }

    update() {
        // object update
        if (this.object?.update) {
            this.object.update();
        }

        // animation
        if (this.animations && this.animations.length > 0) {
            const newImg = this.animations.find(a => a.name === this.animationState)?.getImage(this.callback);
            this.img = newImg || null;
        }

        //move
        if (this.moving) {
            this.stateWithMotion = Motion.addMotion(this.motion, this.statePercentMoving);
            this.x = (this.initialPos.x - this.img.width /2) + this.stateWithMotion * (this.dest.x - this.initialPos.x);
            this.y = (this.initialPos.y - this.img.height /2) + this.stateWithMotion * (this.dest.y - this.initialPos.y);
            this.statePercentMoving += this.percentMoving;
            this.counterSpeed++;
            if (this.counterSpeed >= this.speed) {
                this.moving = false;
                this.x = this.dest.x - this.img.width / 2;
                this.y = this.dest.y - this.img.height / 2;
                if (this.callback) {
                    this.callback();
                }
            }
        }

        // collider 
        if (this.canCollide) {
            const sprite = this;
            sprites.forEach(s => {
                if (sprite != s) {
                    if (doSpritesCollide(sprite, s, this.marginCollider)) {
                        s.onSpriteEnter(sprite);
                    } else {
                        s.onSpriteExit(sprite);
                    }
                }
            });
        }
    }

    setAnimationState(state, callback) {
        this.animationState = state;
        this.callback = callback;
    }

    onkeydown(keyState) {
        if (this.object?.onkeydown) {
            this.object.onkeydown(keyState);
        }
    }

    onkeyup(keyState) {
        if (this.object?.onkeyup) {
            this.object.onkeyup(keyState);
        }
    }

    onmousedown(pos) {
        if (this.object?.onmousedown) {
            this.object.onmousedown(pos);
        }
    }

    onmouseup(pos) {
        if (this.object?.onmouseup) {
            this.object.onmouseup(pos);
        }
    }

    onmousein(pos) {
        if (this.mousein)
            return;
        this.mousein = true;
        if (this.object?.onmousein) {
            this.object.onmousein(pos);
        }
    }

    onmouseout(pos) {
        if (!this.mousein) 
            return;
        this.mousein = false;
        if (this.object?.onmouseout) {
            this.object.onmouseout(pos);
        }
    }

    onSpriteEnter(sprite) {
        if (!this.collides.get(sprite.id)) {
            this.collides.set(sprite.id, true);
            if (this.object?.onSpriteEnter) {
                this.object.onSpriteEnter(sprite);
            }
        }
    }

    onSpriteExit(sprite) {
        if (this.collides.get(sprite.id)) {
            this.collides.set(sprite.id, false);
            if (this.object?.onSpriteExit) {
                this.object.onSpriteExit(sprite);
            }
        }
    }

    getCenterPos() {
        return {
            x: this.x + this.img.width / 2,
            y: this.y + this.img.height / 2
        }
    }

    moveToXY(x, y, speed, motion, callback) {
        if (this.moving) {
            return;
        }
        this.motion = Motions.LINEAR;
        if (motion) {
            this.motion = motion;
        }
        this.counterSpeed = 0;
        this.initialPos = this.getCenterPos();
        this.percentMoving = 1 / speed;
        this.statePercentMoving = this.percentMoving;
        this.dest = {x: x, y: y};
        this.speed = speed;
        this.moving = true;
        if (callback)
            this.callback = callback;
    }

    moveToSprite(sprite, speed, motion, callback) {
        this.moveToXY(sprite.getCenterPos(sprite), speed, motion, callback);
    }

    destroy() {
        sprites.splice(sprites.indexOf(this), 1);
    }
}