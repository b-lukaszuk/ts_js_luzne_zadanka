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

function numOfPropDivsForNumsUpTo(upToIncl: number): number[] {
    return range(1, upToIncl + 1).map((n) => {
        return getProperDivisors(n).length;
    })
}

function displInfoNumOfPropDivsUpTo(upToIncl: number): void {
    console.log("====");
    console.log("Calculating the number of proper divisors");
    console.log("For numbers in range: 1 to", upToIncl);
    console.log("PLEASE BE PATIENT THIS MAY TAKE A WHILE");
    let noOfPropDivs: number[] = numOfPropDivsForNumsUpTo(upToIncl);
    let maximum: number = Math.max(...noOfPropDivs);
    // +1 since indexOf 0 indexed, and numOfPropDivsForNumsUpTo() 1 indexed
    let whichNum: number = noOfPropDivs.indexOf(maximum) + 1;
    console.log(whichNum, "got the greatest number, i.e.",
        maximum, "of proper divisors")
    console.log("====");
}


function main(): void {
    console.log("Wellcome to program looking for proper divisors of numbers");
    displInfoNumOfPropDivsUpTo(20000);
    console.log("That is all. Goodbye");
}

// execution time 2.35 sec
main();
