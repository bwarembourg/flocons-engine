class Motion {
    // For More info
    // https://easings.net/#

    static linear(x) {
        return x;
    }

    static easeInSine(x) {
        return 1 - Math.cos((x * Math.PI) / 2);
    }

    static easeInOutSine(x) {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    }

    static easeOutBounce(x) {
        const n1 = 7.5625;
        const d1 = 2.75;

        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
        }

    static addMotion(motion, x) {
        switch(motion) {
            case Motions.EASE_IN_SINE: return this.easeInSine(x);
            case Motions.EASE_IN_OUT_SINE: return this.easeInOutSine(x);
            case Motions.EASE_OUT_BOUNCE: return this.easeOutBounce(x);
            default: return this.linear(x);
        }
    }

}

const Motions = {
    LINEAR: 'linear',
    EASE_IN_SINE: 'EASE_IN_SINE',
    EASE_IN_OUT_SINE: 'EASE_IN_OUT_SINE',
    EASE_OUT_BOUNCE: 'EASE_OUT_BOUNCE'
}

