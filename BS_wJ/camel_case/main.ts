// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

function printIntro() {
  console.log(
    "Toy program for converting snake_case to lowerCamelCase (and vice versa).",
  );
  console.log("Warning. It may or may not work correctly.\n");
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  // TODO: print examples

  printOutro();
}
