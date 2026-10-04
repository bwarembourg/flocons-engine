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

    static easeOutSine(x) {
        return Math.sin((x * Math.PI) / 2);
    }

    static easeInQuad(x) {
        return x * x;
    }

    static easeOutQuad(x) {
        return 1 - (1 - x) * (1 - x);
    }

    static easeInOutQuad(x) {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }

    static easeInCubic(x) {
        return x * x * x;
    }

    static easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    static easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    static easeInQuart(x) {
        return x * x * x * x;
    }

    static easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    static easeInOutQuart(x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    }

    static easeInQuint(x) {
        return x * x * x * x * x;
    }

    static easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }

    static easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }

    static easeInExpo(x) {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }

    static easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    static easeInOutExpo(x) {
        return x === 0
            ? 0
            : x === 1
            ? 1
            : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
            : (2 - Math.pow(2, -20 * x + 10)) / 2;
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
            case Motions.EASE_OUT_SINE: return this.easeOutSine(x);
            case Motions.EASE_IN_OUT_SINE: return this.easeInOutSine(x);
            case Motions.EASE_IN_QUAD: return this.easeInQuad(x);
            case Motions.EASE_OUT_QUAD: return this.easeOutQuad(x);
            case Motions.EASE_IN_OUT_QUAD: return this.easeInOutQuad(x);
            case Motions.EASE_IN_CUBIC: return this.easeInCubic(x);
            case Motions.EASE_OUT_CUBIC: return this.easeOutCubic(x);
            case Motions.EASE_IN_OUT_CUBIC: return this.easeInOutCubic(x);
            case Motions.EASE_IN_QUART: return this.easeInQuart(x);
            case Motions.EASE_OUT_QUART: return this.easeOutQuart(x);
            case Motions.EASE_IN_OUT_QUART: return this.easeInOutQuart(x)
            case Motions.EASE_IN_QUINT: return this.easeInQuint(x);
            case Motions.EASE_OUT_QUINT: return this.easeOutQuint(x);
            case Motions.EASE_IN_OUT_QUINT: return this.easeInOutQuint(x);
            case Motions.EASE_IN_EXPO: return this.easeInExpo(x);
            case Motions.EASE_OUT_EXPO: return this.easeOutExpo(x);
            case Motions.EASE_IN_OUT_EXPO: return this.easeInOutExpo(x);

            case Motions.EASE_OUT_BOUNCE: return this.easeOutBounce(x);
            default: return this.linear(x);
        }
    }

}

const Motions = {
    LINEAR: 'linear',
    EASE_IN_SINE: 'EASE_IN_SINE',
    EASE_OUT_SINE: 'EASE_OUT_SINE',
    EASE_IN_OUT_SINE: 'EASE_IN_OUT_SINE',
    EASE_IN_QUAD: 'EASE_IN_QUAD',
    EASE_OUT_QUAD: 'EASE_OUT_QUAD',
    EASE_IN_OUT_QUAD: 'EASE_IN_OUT_QUAD',
    EASE_IN_CUBIC: 'EASE_IN_CUBIC', 
    EASE_OUT_CUBIC: 'EASE_OUT_CUBIC',
    EASE_IN_OUT_CUBIC: 'EASE_IN_OUT_CUBIC', 
    EASE_IN_QUART: 'EASE_IN_QUART', 
    EASE_OUT_QUART: 'EASE_OUT_QUART',
    EASE_IN_OUT_QUART: 'EASE_IN_OUT_QUART',
    EASE_IN_QUINT: 'EASE_IN_QUINT',
    EASE_OUT_QUINT: 'EASE_OUT_QUINT',
    EASE_IN_OUT_QUINT: 'EASE_IN_OUT_QUINT',
    EASE_IN_EXPO: 'EASE_IN_EXPO',
    EASE_OUT_EXPO: 'EASE_OUT_EXPO',
    EASE_IN_OUT_EXPO: 'EASE_IN_OUT_EXPO',

    EASE_OUT_BOUNCE: 'EASE_OUT_BOUNCE'
}

