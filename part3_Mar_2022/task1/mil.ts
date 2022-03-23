function m2t(mils: number): number {
    let turns: number = mils / 6400;
    return turns;
}

export { m2t };
