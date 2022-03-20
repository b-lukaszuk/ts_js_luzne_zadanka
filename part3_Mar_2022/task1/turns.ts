function t2d(turns: number): number {
    let degrees: number = turns * 360;
    return degrees;
}

function t2g(turns: number): number {
    let gradians: number = turns * 400;
    return gradians;
}

function t2m(turns: number): number {
    let mils: number = turns * 6400;
    return mils;
}

function t2r(turns: number): number {
    let radians: number = turns * (2 * Math.PI);
    return radians;
}

export { t2d, t2g, t2m, t2r };
