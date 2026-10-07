class Sfx {
    constructor() {}

    setSfxs(sfxs) {
        this.sfxs = sfxs;
    }
    
    play(sfxId) {
        let sfx = this.sfxs.find(s => s.id === sfxId);
        sfx.audio = new Audio(sfx.src);
        sfx.audio.play();
    }

    isPlaying(sfxId) {
        let sfx = this.sfxs.find(s => s.id === sfxId);
        return sfx.audio.duration > 0 && !sfx.audio.paused;
    }

    pause(sfxId) {
        let sfx = this.sfxs.find(s => s.id === sfxId);
        sfx.audio.pause();
    }

    resume(sfxId) {
        let sfx = this.sfxs.find(s => s.id === sfxId);
        sfx.audio.play();
    }
}

const SFX = new Sfx();