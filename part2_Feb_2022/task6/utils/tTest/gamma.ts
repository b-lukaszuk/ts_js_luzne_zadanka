<<<<<<< HEAD
import isInt from "./isInt";
import factorial from "./factorial";
=======
import isInt from "../basic/isInt";
import factorial from "../basic/factorial";
>>>>>>> 87d57f2ffdf46ae1332cbcda85f5a2536fabbaa8

// https://rosettacode.org/wiki/Gamma_function#JavaScript
// https://en.wikipedia.org/wiki/Lanczos_approximation
// https://en.wikipedia.org/wiki/Gamma_function
function gamma(x: number): number {
    if (isInt(x)) {
        return factorial(x - 1);
    } else {
        let p: number[] = [0.99999999999980993, 676.5203681218851,
            -1259.1392167224028, 771.32342877765313, -176.61502916214059,
            12.507343278686905, -0.13857109526572012,
            9.9843695780195716e-6, 1.5056327351493116e-7];

        let g: number = 7;
        if (x < 0.5) {
            return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
        }

        x -= 1;
        let a: number = p[0];
        let t: number = x + g + 0.5;
        for (let i = 1; i < p.length; i++) {
            a += p[i] / (x + i);
        }

        return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
    }
}

export default gamma;