class SImg {
    constructor(src) {
        this.img = new Image();
        this.img.src = src;
        this.img.onload = onLoadImg;
        spriteImgs.push(this);
    }

}