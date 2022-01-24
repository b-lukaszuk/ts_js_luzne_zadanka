function getPreFilledArr1d(len: number, fill: number) {
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = fill;
    }
    return result;
}

export default getPreFilledArr1d;
