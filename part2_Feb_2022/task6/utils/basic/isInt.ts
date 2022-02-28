function isInt(n: number): boolean {
    if (isNaN(n)) {
        return false;
    } else {
        return (n | 0) === n;
    }
}

export default isInt;
