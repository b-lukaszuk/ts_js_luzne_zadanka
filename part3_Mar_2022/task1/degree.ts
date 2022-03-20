function d2t(degrees: number): number {
    let turns: number = degrees / 360;
    return turns;
}

function d2g(degrees: number): number {
    let turns: number = d2t(degrees);
    let gradians: number = turns * 400;
    return gradians;
}

function d2m(degrees: number): number {
    let turns: number = d2t(degrees);
    let mils: number = turns * 6400;
    return mils;
}

function d2r(degrees: number): number {
    let turns: number = d2t(degrees);
    let radians: number = turns * 2 * Math.PI;
    return radians;
}

export { d2t, d2g, d2m, d2r };
