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
    cards: Array<number>,
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
    cards: Array<number>,
    atRandom: boolean
): Array<number> {
    let fstGuess: number = atRandom ? randInt(0, noOfCards) : cards[prisonerId];
    let guesses: Array<number> = [fstGuess];
    for (let i = 1; i < noOfGuesses; i++) {
        if (guesses[i - 1] === prisonerId) {
            break;
        }
        guesses.push(getNexGuess(guesses[i - 1], cards, atRandom));
    }
    return guesses;
}

function isLuckyCardFound(prisonerId: number, guesses: Array<number>): boolean {
    return prisonerId === guesses[guesses.length - 1];
}

function allPrisonersFooundLuckyCard(results: Array<boolean>): boolean {
    for (let i = 0; i < results.length; i++) {
        if (!results[i]) {
            return false;
        }
    }
    return true;
}

// returns 1 (success) | 0 (failure) for all prisoners finding lucky cards
function run1Iter(atRandom: boolean): 0 | 1 {
    let cupboard: Array<number> = scramble(range(noOfCards));
    let results: Array<boolean> = [];
    for (let i = 0; i < noOfPrisoners; i++) {
        let result: boolean = isLuckyCardFound(
            i,
            getGuesses(i, guessesPerPrisoner, cupboard, atRandom)
        );
        results.push(result);
    }
    return allPrisonersFooundLuckyCard(results) ? 1 : 0;
}

// array of 1's and 0's (successes or failures of single iters)
function runNIters(noOfIters: number, atRandom: boolean): Array<number> {
    let results: Array<number> = getArr1dPrefilledByFn(noOfIters, () => {
        return run1Iter(atRandom);
    });
    return results;
}

function getAvg(arr1d: Array<number>): number {
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

main();
