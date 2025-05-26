function isUppercase(letter: string): boolean {
  return letter == letter.toLocaleUpperCase();
}

function changeToSnakeCase(camelCasedWord: string): string {
  let result: string = "";
  let c: string = "";
  for (let i = 0; i < camelCasedWord.length; i++) {
    c = camelCasedWord[i];
    result += isUppercase(c) ? "_" + c.toLocaleLowerCase() : c;
  }
  return result;
}

function changeToCamelCase(snakeCasedWord: string): string {
  let result: string = "";
  let prevUnderscore: boolean = false;
  let c: string = "";
  for (let i = 0; i < snakeCasedWord.length; i++) {
    c = snakeCasedWord[i];
    if (c == "_") {
      prevUnderscore = true;
      continue;
    }
    result += prevUnderscore ? c.toLocaleUpperCase() : c;
    prevUnderscore = false;
  }
  return result;
}

function printExamples(v: string[], converter: (s: string) => string) {
  for (let i = 0; i < v.length; i++) {
    console.log(v[i], " => ", converter(v[i]));
  }
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

  const camels: string[] = [
    "helloWorld",
    "niceToMeetYou",
    "translateToEnglish",
  ];
  const snakes: string[] = [
    "hello_world",
    "nice_to_meet_you",
    "translate_to_english",
  ];
  printExamples(camels, changeToSnakeCase);
  console.log();
  printExamples(snakes, changeToCamelCase);

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { changeToCamelCase, changeToSnakeCase };
