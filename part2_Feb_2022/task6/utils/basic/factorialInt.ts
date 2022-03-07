import isInt from "./isInt";

function factorialInt(someInt: number): number {
    if (someInt < 0 || !isInt(someInt)) {
        return NaN;
    } else if (someInt < 2) {
        return 1;
    } else {
        let result: number = 1;
        for (let i = 2; i <= someInt; i++) {
            result *= i;
        }
        return result;
    }
}

export default factorialInt;
