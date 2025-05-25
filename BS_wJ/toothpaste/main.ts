// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

function printIntro() {
  console.log(
    "Toy program for the toothpaste problem.",
  );
  console.log("Warning. It may or may not work correctly.\n");
}

function printExamples() {
  console.log("Examples go here.");
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printExamples();

  printOutro();
}
