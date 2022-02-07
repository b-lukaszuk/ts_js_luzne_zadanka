function getProperDivisors(testedNum: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < testedNum; i++) {
        if (testedNum % i === 0) {
            result.push(i);
        }
    }
    return result;
}

function numOfPropDivsForNumsUpTo(upToIncl: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= upToIncl; i++) {
        result.push(getProperDivisors(i).length);
    }
    return result;
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

// execution time 1.6 sec
main();
