import getProperDivisors from "./propDivisors";
import getPropDiv from "./propDivisors";
import getSum from "./sum";
import range from "./range";

function getSumPropDiv(testedNum: number): number {
    let propDivs: number[] = getPropDiv(testedNum);
    return getSum(propDivs);
}

const conditionsFns: Function[] = [
    (num1, num2) => {
        return num1 !== num2;
    },
    (num1, num2) => {
        return getSumPropDiv(num1) === num2;
    },
    (num1, num2) => {
        return getSumPropDiv(num2) === num1;
    },
];
Object.freeze(conditionsFns);

function areCondsMet(
    num1: number,
    num2: number,
    condFns: Function[]
): boolean[] {
    let results: boolean[] = [];
    for (let i = 0; i < condFns.length; i++) {
        results.push(condFns[i](num1, num2));
    }
    return results;
}

function areAmicablePair(
    num1: number,
    num2: number,
    predicates: Function[]
): boolean {
    let conditionsFilled: boolean[] = areCondsMet(num1, num2, predicates);
    return conditionsFilled.reduce((acc, curVal) => {
        return acc && curVal;
    }, true);
}
