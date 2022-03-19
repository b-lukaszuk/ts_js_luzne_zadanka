function d2t(degree: number): number {
    let turn: number = degree / 360;
    return turn;
}

function d2g(degree: number): number {
    let turn: number = d2t(degree);
    let gradian: number = turn * 400;
    return gradian;
}

function d2m(degree: number): number {
    let turn: number = d2t(degree);
    let mil: number = turn * 6400;
    return mil;
}

function d2r(degree: number): number {
    let turn: number = d2t(degree);
    let radian: number = turn * 2 * Math.PI;
    return radian;
}

export { d2g, d2m, d2r };
