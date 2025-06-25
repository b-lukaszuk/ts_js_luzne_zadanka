function printIntro() {
  console.log("Toy program for the bile problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printProblemDescription() {
  console.log("The problem description goes here.");
}

function printSolution() {
  console.log("The solution goes here.");
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printProblemDescription();
  printSolution();

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { printSolution };
