import { getArr1dPrefilledByFn } from "./arr1dPreFilled";
import randInt from "./randInt";
import range from "./range";
import scramble from "./scrambleArr1d";

const noOfPrisoners: number = 100;
const noOfCards: number = 100;
const guessesPerPrisoner: number = 50;
const noOfIterations: number = 10000;

function getNexGuess(
    prevGuess: number,
    cards: number[],
    atRandom: boolean
): number {
    if (atRandom) {
        return randInt(0, noOfCards);
    } else {
        return cards[prevGuess];
    }
}

function getGuesses(
    prisonerId: number,
    noOfGuesses: number,
    cards: number[],
    atRandom: boolean
): number[] {
    let fstGuess: number = atRandom ? randInt(0, noOfCards) : cards[prisonerId];
    let guesses: number[] = [fstGuess];
    for (let i = 1; i < noOfGuesses; i++) {
        if (guesses[i - 1] === prisonerId) {
            break;
        }
        guesses.push(getNexGuess(guesses[i - 1], cards, atRandom));
    }
    return guesses;
}

function isLuckyCardFound(prisonerId: number, guesses: number[]): boolean {
    return prisonerId === guesses[guesses.length - 1];
}

function allPrisonersFoundLuckyCard(results: boolean[]): boolean {
    for (let i = 0; i < results.length; i++) {
        if (!results[i]) {
            return false;
        }
    }
    return true;
}

// returns 1 (success) | 0 (failure) for all prisoners finding lucky cards
function run1Iter(atRandom: boolean): 0 | 1 {
    let cupboard: number[] = scramble(range(noOfCards));
    let results: boolean[] = [];
    for (let i = 0; i < noOfPrisoners; i++) {
        let result: boolean = isLuckyCardFound(
            i,
            getGuesses(i, guessesPerPrisoner, cupboard, atRandom)
        );
        results.push(result);
    }
    return allPrisonersFoundLuckyCard(results) ? 1 : 0;
}

// array of 1's and 0's (successes or failures of single iters)
function runNIters(noOfIters: number, atRandom: boolean): number[] {
    let results: number[] = getArr1dPrefilledByFn(noOfIters, () => {
        return run1Iter(atRandom);
    });
    return results;
}

function getAvg(arr1d: number[]): number {
    let sum: number = arr1d.reduce((acc, curVal) => {
        return acc + curVal;
    });
    return sum / arr1d.length;
}

function displayInfoAboutStrategy(atRandom: boolean): void {
    console.log("=======================================");
    console.log("strategy:", atRandom ? "random" : "methodical");
    console.log("No of iterations: ", noOfIterations);
    console.log("Calculating the probability of");
    console.log("all prisoners finding their lucky cards");
    console.log("Please be patient, this may take a while");
    console.log("p =", getAvg(runNIters(noOfIterations, atRandom)));
}

function main(): void {
    console.log("====");
    console.log("Calculating probability of success for:");
    console.log(noOfPrisoners, "prisoners,", noOfCards, "cards");
    console.log(guessesPerPrisoner, "of guesses per prisoner");
    displayInfoAboutStrategy(true);
    displayInfoAboutStrategy(false);
    console.log("====");
    console.log("That's all. Goodbye.");
}

// 1.2 sec for 10k iters, 10.2 sec for 100k iters
main();
