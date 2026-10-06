class TextSprite {
    constructor(obj) {
        this.setupConstructor(obj.id, obj.text, obj.layer, obj.x, obj.y, obj.scene, obj.blink, obj.dial, obj.speed,
            obj.callback, obj.align, obj.size, obj.font, obj.color, obj.enabled);
    }

    setupConstructor(id, text, layer, x, y, scene, blink = false, dial = false, speed = 10, callback = null, align = 'center', 
        size= "16px", font = "minecraftia", color = "black", enabled = true) {
        this.id = id;
        this.layer = layer;
        this.fullText = text;
        this.text = dial ? "" : text;
        this.x = x;
        this.y = y;
        this.align = align;
        this.size = size;
        this.font = font;
        this.color = color;
        this.blink = blink;
        this.dial = dial;
        this.scene = scene;
        this.enabled = enabled;
        this.speed = speed;
        this.countFps = 0;
        this.countDial = 1;
        this.callback = callback;
        this.scene.texts.push(this);
    }

    update() {
        // blink
        if (this.blink) {
            this.countFps++;
            if (this.countFps >= this.speed) {
                this.enabled = !this.enabled;
                this.countFps = 0;
            }
        }
        // dial
        if (this.dial) {
            this.countFps++;
            if (this.countFps >= this.speed) {
                this.text = this.fullText.substring(0, this.countDial);
                this.countDial++;
                this.countFps = 0;
                if (this.countDial > this.fullText.length) {
                    this.dial = false;
                    if (this.callback) {
                        this.callback();
                    }
                }
            }
        }
    }

    destroy() {
        this.scene.texts.splice(this.scene.sprites.indexOf(this), 1);
    }
}