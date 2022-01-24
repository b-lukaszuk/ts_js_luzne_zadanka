import getPreFilledArr1d from './arr1dPreFilled';
import randInt from './randInt';

const daysInYear: number = 365;
const noOfPeopleAtParty: number = 30;
const noOfIters: number = 10000;

function getPeopleAtParty(howMany: number): Array<number> {
    let people: Array<number> = [];
    for (let i = 0; i < howMany; i++) {
        people.push(randInt(0, daysInYear));
    }
    return people;
}

function getValCounts(bDays: Array<number>): Array<number> {
    let lenBDays: number = bDays.length;
    let counts: Array<number> = getPreFilledArr1d(daysInYear, 0);
    for (let i = 0; i < lenBDays; i++) {
        counts[bDays[i]] += 1;
    }
    return counts;
}

function anyValGTaNum(arr1d: Array<number>, valToCompare: number): boolean {
    for (let i = 0; i < arr1d.length; i++) {
        if (arr1d[i] > valToCompare) {
            return true;
        }
    }
    return false;
}

function anySameBDays(bDays: Array<number>): boolean {
    let counts: Array<number> = getValCounts(bDays);
    return anyValGTaNum(counts, 1);
}

function getAvg(arr1d: Array<number>): number {
    let sum: number = arr1d.reduce((acc, curVal) => {
        return acc + curVal;
    })
    return sum / arr1d.length;
}

function runNIters(nIter: number): Array<number> {
    let result: Array<number> = [];
    for (let i = 0; i < nIter; i++) {
        result.push(
            anySameBDays(getPeopleAtParty(noOfPeopleAtParty)) ? 1 : 0
        )
    }
    return result;
}

function main(): void {
    console.log("====");
    console.log("Calculating probability of at least 2 people at a party");
    console.log("celebrating their b-days the same day");
    console.log("number of people at a party:", noOfPeopleAtParty);
    console.log("number of iterations:", noOfIters);
    console.log("Please be patient this may take a while");
    console.log("p =", getAvg(runNIters(noOfIters)));
    console.log("====");
    console.log("That's all. Goodbye.");
}

// 0.067 sec for 10k iters, 0.201 sec for 100k iters
main();
