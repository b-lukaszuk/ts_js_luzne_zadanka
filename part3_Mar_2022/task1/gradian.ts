function g2t(gradians: number): number {
    let turns: number = gradians / 400;
    return turns;
}

function g2d(gradians: number): number {
    let turns: number = g2t(gradians);
    let degrees: number = turns * 360;
    return degrees;
}

function g2m(gradians: number): number {
    let turns: number = g2t(gradians);
    let mils: number = turns * 6400;
    return mils;
}

function g2r(gradians: number): number {
    let turns: number = g2t(gradians);
    let radians: number = turns * 2 * Math.PI;
    return radians;
}

export { g2t, g2d, g2m, g2r };
