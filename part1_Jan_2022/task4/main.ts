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

function areArrsEql(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
    return true;
}

function isSubArr(arr1d: number[], arr2d: number[][]): boolean {
    for (let i = 0; i < arr2d.length; i++) {
        if (areArrsEql(arr1d, arr2d[i])) {
            return true;
        }
    }
    return false;
}

function searchForAmicablePairs(upToExcl: number): void {
    let results: number[][] = [];
    for (let i = 1; i < upToExcl; i++) {
        for (let j = 1; j < upToExcl; j++) {
            if (areAmicablePair(i, j) && !isSubArr([i, j].sort(), results)) {
                results.push([i, j].sort());
                console.log("Pair found:", [i, j].sort());
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

// for nums up to 2000 it takes around 40 sec
main();
