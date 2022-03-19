function d2t(degrees: number): number {
    let turns: number = degrees / 360;
    return turns;
}

function d2g(degrees: number): number {
    let turns: number = d2t(degrees);
    let gradian: number = turns * 400;
    return gradian;
}

function d2m(degrees: number): number {
    let turns: number = d2t(degrees);
    let mil: number = turns * 6400;
    return mil;
}

function d2r(degrees: number): number {
    let turns: number = d2t(degrees);
    let radian: number = turns * 2 * Math.PI;
    return radian;
}

export { d2g, d2m, d2r };
