function add(a: number, b: number): number {
  return a + b;
}

function recFactorial(n: number): number {
  if (n < 1) {
    throw new Error("n must be greater than 0");
  }
  return n == 1 ? 1 : n * recFactorial(n - 1);
}

function printIntro() {
  console.log("Toy program for the recursion problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printSolution() {
  for (let i = 1; i < 10; i++) {
    console.log(`factorial(${i}) = ${recFactorial(i)}`);
  }
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
