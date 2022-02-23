import isInt from "./isInt";

function factorial(n: number): number {
    if (n < 0 || !isInt(n)) {
        throw Error("factorial can be computed only for integers >= 0");
    } else if (n < 2) {
        return 1;
    } else {
        let result: number = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

export default factorial;
