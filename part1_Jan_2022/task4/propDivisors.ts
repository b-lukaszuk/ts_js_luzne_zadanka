import range from './range';

function isNoReminder(dividend: number, divisor: number): boolean {
    return dividend % divisor === 0;
}

function getProperDivisors(testedNum: number): number[] {
    let candidates: number[] = range(1, testedNum);
    return candidates.filter((cand) => {
        return isNoReminder(testedNum, cand);
    })
}

export default getProperDivisors;
