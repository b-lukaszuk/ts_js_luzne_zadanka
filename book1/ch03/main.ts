function countCharInText(
  text: string,
  char: string,
  caseInsensitive: boolean = true,
): number {
  text = caseInsensitive ? text.toLocaleLowerCase() : text;
  char = caseInsensitive ? char.toLocaleLowerCase() : char;
  let count: number = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count;
}

function countUppercaseBsInText(text: string): number {
  return countCharInText(text, "B", false);
}

function main() {
  const exemplaryTexts: string[] = [
    "Hello there. General Kenobi!",
    "Bare necessities, Bare necessities, bare necessities of life",
    "I'll make a man out of you.",
  ];

  exemplaryTexts.forEach((text) => {
    console.log(
      `'${text}' contains ${countUppercaseBsInText(text)} letter(s) B`,
    );
    console.log(`'${text}' contains ${countCharInText(text, "e")} letter(s) e`);
  });

  console.log(exemplaryTexts[0]);
  console.log(exemplaryTexts[1]);
  console.log(exemplaryTexts[2]);
}

main();
