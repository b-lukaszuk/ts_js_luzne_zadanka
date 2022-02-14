// the desciption on how to compare numbers was a bit imprecise to me
function areAproxEql(num1: number, num2: number): boolean {
    let theMax: number = Math.max(Math.abs(num1), Math.abs(num2));
    let relativeDiff: number = 1e-9;
    return Math.abs(num1 - num2) <= (theMax * relativeDiff);
}

let numsToTest: number[] = [
    100000000000000.01, 100000000000000.011,
    100.01, 100.011,
    10000000000000.001 / 10000.0, 1000000000.0000001000,
    0.001, 0.0010000001,
    0.000000000000000000000101, 0.0,
    Math.sqrt(2) * Math.sqrt(2), 2.0,
    -Math.sqrt(2) * Math.sqrt(2), -2.0,
    3.14159265358979323846, 3.14159265358979324,
];

function declareResultOfComparison(num1: number, num2: number): void {
    console.log(`${num1} \u2248 ${num2} => ${areAproxEql(num1, num2)}`);
}

function main(): void {
    console.log("Testing different pairs of numbers for approximate equality");
    console.log("====");
    for (let i = 0; i < numsToTest.length; i += 2) {
        declareResultOfComparison(numsToTest[i], numsToTest[i + 1]);
    }
    console.log("====");
    console.log("That is all. Goodbye!");
}

main();
