import gamma from "./gamma";

// https://en.wikipedia.org/wiki/Student%27s_t-distribution#Probability_density_function
// tested (with a few random numbers) for fidelity with R's dt function
function tTestPdf(tStat: number, df: number): number {
    let p1Numerator: number = gamma((df + 1) / 2);
    let p1Denominator: number = Math.sqrt(Math.PI * df) * gamma(df / 2);
    let p1: number = p1Numerator / p1Denominator;
    let p2: number = 1 + Math.pow(tStat, 2) / df;
    let p3: number = -1 * ((df + 1) / 2);
    return p1 * (p2 ** p3);
}

export { tTestPdf };
