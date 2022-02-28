import gamma from "./gamma";

function tTestPdf(x: number, df: number): number {
    let p1Numerator: number = gamma((df + 1) / 2);
    let p1Denominator: number = Math.sqrt(Math.PI * df) * gamma(df / 2);
    let p1: number = p1Numerator / p1Denominator;
    let p2: number = 1 + (x ** 2) / 2;
    let p3: number = -1 * ((df + 1) / 2);
    return p1 * (p2 ** p3);
}

export { tTestPdf };
