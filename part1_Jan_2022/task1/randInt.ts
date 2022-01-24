/**
 * python like randInt
 * returns random int from given range (incl-excl)
 * @param {number}  minIncl - minimum (incl)
 * @param {number}  maxExcl - maximum (excl)
 * @returns {number} random value from a given range
 */
function randInt(minIncl: number, maxExcl?: number): number {

    let result: number = 0;

    for (let i = 0; i < 2; i++) {
        if (arguments[i] < 0) {
            throw new Error("range must not include negative numbers");
        }
    }
    if (arguments.length === 1) {
        maxExcl = minIncl;
        minIncl = 0;
    }
    // floats protection
    minIncl = Math.ceil(minIncl);
    // should always be true,
    // but the stricter angular checker requires me to do that way
    if (maxExcl) {
        maxExcl = Math.floor(maxExcl);
        result = Math.floor(Math.random() * (maxExcl - minIncl)) + minIncl;
    }

    return result;
}

export default randInt;
