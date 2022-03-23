function r2t(radians: number): number {
    let turns: number = radians / (2 * Math.PI);
    return turns;
}

export { r2t };
