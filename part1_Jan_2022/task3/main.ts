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

function displInfoPropDivOf(testedNum: number): void {
    console.log("Proper divisors of", testedNum, "are:");
    console.log(getProperDivisors(testedNum));
}


function main(): void {
    console.log("Wellcome to program displaying proper divisons of numbers");
    displInfoPropDivOf(1);
    displInfoPropDivOf(6);
    displInfoPropDivOf(100);
    console.log("That is all. Goodbye");
}

main();
