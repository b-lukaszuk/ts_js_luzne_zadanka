import choose from "./choose";

// tested (with a few random numbers) for fidelity with R's dbinom function
// seems to be working just fine
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

// tested (with a few random numbers) for fidelity with R's pbinom function
// seems to be working just fine
function binomialCDF(noOfSuccesses: number, noOfTrials: number,
    probOfSuccess: number, lowerTail: boolean = true): number {
    if (noOfSuccesses < 0 || noOfTrials < 0
        || probOfSuccess < 0 || probOfSuccess > 1) {
        return NaN;
    }
    let result: number = 0;
    for (let i = 0; i <= noOfSuccesses; i++) {
        result += binomialPMF(i, noOfTrials, probOfSuccess);
    }
    return lowerTail ? result : (1 - result);
}

export { binomialPMF, binomialCDF };
