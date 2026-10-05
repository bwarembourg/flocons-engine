class Anim {
    // name
    // sprites
    // speed
    // frameId
    // spriteId
    // currentImage

    constructor(name, spriteSrcs, speed) {
        this.name = name;
        this.spriteImgs = [];
        spriteSrcs.forEach(src => {
            this.spriteImgs.push(new SImg(src))
        });
        this.speed = speed;
        this.frameId = 0;
        this.spriteId = 0;
        this.currentImage = this.spriteImgs[0]; 
    }

    resetFrameId() {
        frameId++;
    }

    getImage(callback) {
        this.frameId++;
        if (this.frameId >= this.speed) {
            this.frameId = 0;
            if (this.spriteId < this.spriteImgs.length - 1) {
                this.spriteId++;
            } else {
                this.spriteId = 0;
                if (callback) {
                    callback();
                }
            }
            this.currentImage = this.spriteImgs[this.spriteId];
        }
        return this.currentImage.img;
    }
}