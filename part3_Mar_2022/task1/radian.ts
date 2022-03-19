function r2t(radians: number): number {
    let turns: number = radians / (2 * Math.PI);
    return turns;
}

function r2d(radians: number): number {
    let turns: number = r2t(radians);
    let degrees: number = turns * 360;
    return degrees;
}

function r2g(radians: number): number {
    let turns: number = r2t(radians);
    let gradians: number = turns * 400;
    return gradians;
}

function r2m(radians: number): number {
    let turns: number = r2t(radians);
    let mils: number = turns * 6400;
    return mils;
}

export { r2d, r2g, r2m };
