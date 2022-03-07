import isInt from "./isInt";
import factorialInt from "./factorialInt";
import gamma from "./gamma";

// tested (with a few random numbers) for fidelity with R's factorial function
// accurate (agrees with R's output) up to 11 decimal digits
function factorial(n: number): number {
    if (n < 0) {
        return NaN;
    } else if (isInt(n)) {
        return factorialInt(n);
    } else {
        return gamma(n + 1);
    }
}

export default factorial;
