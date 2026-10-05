class Scene {
    constructor(id, object, startingScene, UI) {
        this.id = id;
        this.startingScene = startingScene;
        this.UI = UI;
        this.sprites = new Array();
        if (object) {
            this.object = object;
            this.object.scene = this;
        }
        scenes.push(this);
    }

    setup() {
        if (this.object?.setup) {
            this.object.setup();
        }
        if (this.UI?.setup) {
            this.UI.setup();
        }
        this.sprites.forEach(s => {
            if (s.setup) {
                s.setup();
            }
        });
    }

    update() {
        if (this.object?.update) {
            this.object.update();
        }
    }

    destroy() {
        this.sprites.forEach(s => s.destroy());
    }

    onkeydown() {
        if (this.object?.onkeydown) {
            this.object.onkeydown();
        }
    }

    onkeyup() {
        if (this.object?.onkeyup) {
            this.object.onkeyup();
        }
    }

    onmousedown() {
        if (this.object?.onmousedown) {
            this.object.onmousedown();
        }
    }

    onmouseup() {
        if (this.object?.onmouseup) {
            this.object.onmouseup();
        }
    }
}