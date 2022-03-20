function m2t(mils: number): number {
    let turns: number = mils / 6400;
    return turns;
}

function m2d(mils: number): number {
    let turns: number = m2t(mils);
    let degrees: number = turns * 360;
    return degrees;
}

function m2g(mils: number): number {
    let turns: number = m2t(mils);
    let gradians: number = turns * 400;
    return gradians;
}

function m2r(mils: number): number {
    let turns: number = m2t(mils);
    let radians: number = turns * 2 * Math.PI;
    return radians;
}

export { m2t, m2d, m2g, m2r };
