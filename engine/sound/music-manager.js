class Music {
    constructor() {
        this.music = new Audio();
    }
    

    play(src) {
        this.music = new Audio(src);
        this.music.play();
    }

    isPlaying() {
        return this.music.duration > 0 && !this.music.paused
    }

    pause() {
        this.music.pause();
    }

    resume() {
        this.music.play();
    }
}

const MUSIC = new Music();