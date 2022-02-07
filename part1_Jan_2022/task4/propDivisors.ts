function getProperDivisors(testedNum: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < testedNum; i++) {
        if (testedNum % i === 0) {
            result.push(i);
        }
    }
    return result;
}

export default getProperDivisors;
