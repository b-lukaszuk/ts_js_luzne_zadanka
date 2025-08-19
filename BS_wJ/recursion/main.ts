function add(a: number, b: number): number {
  return a + b;
}

function printIntro() {
  console.log("Toy program for the recursion problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printSolution() {
  console.log("The solution goes here.");
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printSolution();

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { add };
