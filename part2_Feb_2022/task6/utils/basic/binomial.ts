import choose from "./choose";

function binomialPMF(noOfSuccesses: number, noOfTrials: number,
    probOfSuccess: number): number {
    if (noOfSuccesses < 0 || noOfTrials < 0
        || probOfSuccess < 0 || probOfSuccess > 1) {
        return NaN;
    }
    let p1: number = choose(noOfTrials, noOfSuccesses);
    let p2: number = Math.pow(probOfSuccess, noOfSuccesses);
    let p3: number = Math.pow(1 - probOfSuccess, noOfTrials - noOfSuccesses);
    return p1 * p2 * p3;
}

export { binomialPMF };
