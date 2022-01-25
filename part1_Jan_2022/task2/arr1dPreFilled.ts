function getArr1dPrefilledByFn(len: number, fillFn: Function): Array<number> {
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = fillFn();
    }
    return result;
}

function getArr1dPrefilledWithNum(len: number, fill: number): Array<number> {
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = fill;
    }
    return result;
}

export { getArr1dPrefilledByFn, getArr1dPrefilledWithNum };
