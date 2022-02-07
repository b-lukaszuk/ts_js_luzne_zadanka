import getPropDivs from "./propDivisors";
import getSum from "./sum";

function getSumPropDivs(testedNum: number): number {
    let propDivs: number[] = getPropDivs(testedNum);
    return getSum(propDivs);
}

function areAmicablePair(num1: number, num2: number): boolean {
    return (
        num1 !== num2 &&
        getSumPropDivs(num1) === num2 &&
        getSumPropDivs(num2) === num1
    );
}

function searchForAmicablePairs(upToIncl: number): void {
    for (let i = 1; i < upToIncl; i++) {
        for (let j = i; j <= upToIncl; j++) {
            if (areAmicablePair(i, j)) {
                console.log("Pair found:", [i, j]);
            }
        }
    }
}

function displInfoAmicablePairs(searchUpToExcl: number): void {
    console.log("Looking for amicable pairs");
    console.log("testing numbers up to (excl):", searchUpToExcl);
    console.log("PLEASE BE PATIENT THIS MAY TAKE SOME TIME");
    searchForAmicablePairs(searchUpToExcl);
}

function main(): void {
    console.log("");
    console.log("====");
    displInfoAmicablePairs(2000);
    console.log("====");
    console.log("That is all. Goodbye.");
}

// for nums up to 2000 it takes around 9.8 sec
main();
