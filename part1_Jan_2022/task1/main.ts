import {
    getArr1dPrefilledByFn,
    getArr1dPrefilledWithNum
} from './arr1dPreFilled';
import randInt from './randInt';

const daysInYear: number = 365;
const noOfPeopleAtParty: number = 30;
const noOfIters: number = 10000;

function getPeopleAtParty(howMany: number): number[] {
    let people: number[] = getArr1dPrefilledByFn(howMany, () => {
        return randInt(0, daysInYear);
    });
    return people;
}

function getBDaysCounts(bDays: number[]): number[] {
    let lenBDays: number = bDays.length;
    let counts: number[] = getArr1dPrefilledWithNum(daysInYear, 0);
    for (let i = 0; i < lenBDays; i++) {
        counts[bDays[i]] += 1;
    }
    return counts;
}

function anyValGT(arr1d: number[], GTwhat: number): boolean {
    for (let i = 0; i < arr1d.length; i++) {
        if (arr1d[i] > GTwhat) {
            return true;
        }
    }
    return false;
}

function anySameBDays(bDays: number[]): boolean {
    let counts: number[] = getBDaysCounts(bDays);
    return anyValGT(counts, 1);
}

function getAvg(arr1d: number[]): number {
    let sum: number = arr1d.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
    return sum / arr1d.length;
}

function runNIters(nIter: number): number[] {
    let result: number[] = getArr1dPrefilledByFn(nIter, () => {
        return anySameBDays(getPeopleAtParty(noOfPeopleAtParty)) ? 1 : 0;
    });
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
