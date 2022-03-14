import choose from "./choose";

// TODO: check it with R's hypergeom functions
// (either: dhyper, phyper, qhyper; probably: dhyper)
// https://www.youtube.com/watch?v=uzN7U88KSx8
// tested with the numbers given in the video, seems to be working correctly

function hypergeom(
    numOfSuccInNumOfTrials: number,
    totalNoOfEltsInPopulation: number,
    numOfSuccInPopulation: number,
    numOfTrialsOrSampleSize: number
): number {
    let numOfFailuresInPopulation: number =
        totalNoOfEltsInPopulation - numOfSuccInPopulation;
    let numOfFailuresInNumOfTrials: number =
        numOfTrialsOrSampleSize - numOfSuccInNumOfTrials;
    let numerator1: number = choose(
        numOfSuccInPopulation,
        numOfSuccInNumOfTrials
    );
    let numerator2: number = choose(
        numOfFailuresInPopulation,
        numOfFailuresInNumOfTrials
    );
    let denominator: number = choose(
        totalNoOfEltsInPopulation,
        numOfTrialsOrSampleSize
    );
    // console.log(
    //     "numerator 1 =",
    //     numOfSuccInPopulation,
    //     numOfSuccInNumOfTrials
    // );
    // console.log(
    //     "numerator 2 =",
    //     numOfFailuresInPopulation,
    //     numOfFailuresInNumOfTrials
    // );
    // console.log(
    //     "denominator =",
    //     totalNoOfEltsInPopulation,
    //     numOfTrialsOrSampleSize
    // );
    return (numerator1 * numerator2) / denominator;
}

// [0, 1, 2, 3].forEach((n) => console.log(hypergeom(n, 9, 3, 5)));
// console.log(
//     [0, 1, 2, 3]
//         .map((n) => hypergeom(n, 9, 3, 5))
//         .reduce((prev, cur) => prev + cur, 0)
// );

export default hypergeom;
