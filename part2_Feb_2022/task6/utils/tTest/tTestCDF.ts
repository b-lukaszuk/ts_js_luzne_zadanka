import hypergeom from "../basic/hypergeom";
import gamma from "../basic/gamma";

// https://en.wikipedia.org/wiki/Student%27s_t-distribution#Cumulative_distribution_function
function tTestCDF(t: number, df: number): number {

    if ((t * t) < df) {

        let p1: number = 0.5;
        let p2num: number = gamma(0.5 * (df + 1));
        let p2denom: number = Math.sqrt(Math.PI * df) * gamma(df / 2);
        let p3: number = hypergeom(0.5, 0.5 * (df + 1),
            3 / 2, -1 * ((t * t) / df));

        return p1 + t * (p2num / p2denom) * p3;

    } else {
        return NaN;
    }
}

export default tTestCDF;
