import gamma from "./gamma";

// https://codeplea.com/incomplete-beta-function-c
// https://github.com/codeplea/incbeta/blob/master/incbeta.c
// translated to ts by me

function beta(x: number, y: number): number {
    let numerator: number = gamma(x) * gamma(y);
    let denominator: number = gamma(x + y);
    return numerator / denominator;
}

function lGamma(x: number): number {
    return Math.log(Math.abs(gamma(x)));
}

const TINY: number = 1e-30;
const STOP: number = 1e-8;

function incBeta(a: number, b: number, x: number): number {
    if (x < 0 || x > 1) {
        return NaN;
    }
    // The continued fraction converges nicely for x < (a+1)/(a+b+2)
    if (x > (a + 1) / (a + b + 2)) {
        return 1 - incBeta(b, a, 1 - x); // Use the fact that beta is symmetrical
    }

    // Find the first part before the continued fraction
    const lbeta_ab: number = lGamma(a) + lGamma(b) - lGamma(a + b);
    const front: number =
        Math.exp(Math.log(x) * a + Math.log(1 - x) - lbeta_ab) / a;

    // Use Lentz's algorithm to evaluate the continued fraction
    let [f, c, d, i, m]: number[] = [1, 1, 0, 0, 0];

    for (i = 0; i <= 200; ++i) {
        m = i / 2;
        let numerator: number = 0;
        if (i === 0) {
            numerator = 1; // First numerator is 1.0
        } else if (i % 2 === 0) {
            // Even term
            numerator = (m * (b - m) * x) / ((a + 2.0 * m - 1.0) * (a + 2.0 * m));
        } else {
            // Odd term
            numerator =
                -((a + m) * (a + b + m) * x) / ((a + 2.0 * m) * (a + 2.0 * m + 1));
        }

        // Do an iteration of Lentz's algorithm
        d = 1 + numerator * d;
        if (Math.abs(d) < TINY) {
            d = TINY;
        }
        d = 1 / d;

        c = 1 + numerator / c;
        if (Math.abs(c) < TINY) {
            c = TINY;
        }

        const cd = c * d;
        f *= cd;

        // Check for stop
        if (Math.abs(1.0 - cd) < STOP) {
            return front * (f - 1.0);
        }
    }

    return NaN; // Needed more loops, did not converge
}

export default incBeta;
