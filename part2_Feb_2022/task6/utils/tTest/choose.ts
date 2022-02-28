import factorial from "../basic/factorial";

function choose(n: number, k: number): number {
    if (k > n) {
        return 0
    } else {
        return factorial(n) / (factorial(n - k) * factorial(k));
    }
}

export default choose;
