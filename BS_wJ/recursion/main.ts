function add(a: number, b: number): number {
  return a + b;
}

function recFactorial(n: number): number {
  if (n < 1) {
    throw new Error("n must be greater than 0");
  }
  return n == 1 ? 1 : n * recFactorial(n - 1);
}

function recFib(n: number, lookup: Map<number, number>): number {
  if (n < 0 || n > 40) {
    throw new Error("n must be in range [0-40]");
  }
  if (!lookup.has(n)) {
    lookup.set(n, recFib(n - 2, lookup) + recFib(n - 1, lookup));
  }
  return lookup.get(n);
}

function printIntro() {
  console.log("Toy program for the recursion problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printSolution() {
  for (let i = 1; i < 10; i++) {
    console.log(`factorial(${i}) = ${recFactorial(i)}`);
  }
  let map = new Map();
  map.set(0, 0);
  map.set(1, 1);
  for (let i = 0; i < 10; i++) {
    console.log(`Fib(${i}) = ${recFib(i, map)}`);
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
