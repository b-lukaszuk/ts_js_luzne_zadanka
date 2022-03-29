import isInt from "./isInt";

// https://www.cplusplus.com/forum/general/255896/
function hypergeom(a: number, b: number, c: number, x: number): number {
    if (Math.abs(x) < 1 || c === 0 || (isInt(c) && c > 0)) {

        const TOLERANCE: number = 1e-10;
        let term: number = a * b * x / c;
        let value: number = 1 + term;
        let n: number = 1;

        while (Math.abs(term) > TOLERANCE) {
            a += 1;
            b += 1;
            c += 1;
            n += 1;
            term *= a * b * x / c / n;
            value += term;
        }

        return value;

    } else {
        return NaN;
    }
}

export default hypergeom;
