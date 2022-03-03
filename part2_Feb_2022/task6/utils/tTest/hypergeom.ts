import choose from "./choose";

// https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.hypergeom.html
function hypergeom(sk: number, cM: number, sn: number, cN: number): number {
    let numerator1: number = choose(sn, sk);
    let numerator2: number = choose(cM - sn, cN - sk);
    let denominator: number = choose(cM, cN);
    return (numerator1 * numerator2) / denominator;
}

export default hypergeom;
