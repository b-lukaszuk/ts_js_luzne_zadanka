import factorial from "./factorial";
import isInt from "./isInt";

// tested (with a few random numbers) for fidelity with R's choose function
// quite accurate (agrees with R's output) diff. in range of 10-11 decimals
function choose(n: number, k: number): number {
    if (k > n) {
        return 0
    } else {
        if (!isInt(k)) {
            console.warn(`k must be integer, rounded to ${Math.round(k)}`);
            k = Math.round(k);
        }
        return factorial(n) / (factorial(n - k) * factorial(k));
    }
}

export default choose;
