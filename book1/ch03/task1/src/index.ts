function countCharInText(text: string, char: string): number {
  let count: number = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }
  return count;
}

function countBsInText(text: string): number {
  return countCharInText(text, 'B');
}

function main() {
  console.log('------------------------------');
  console.log('Task 1.');
  const exemplaryTexts: string[] = [
    'Hello there. General Kenobi!',
    'Bare necessities, Bare necessities, bare necessities of life',
    "I'll make a man out of you.",
  ];
  exemplaryTexts.forEach((text) => {
    console.log(`'${text}' contains ${countBsInText(text)} Bs`);
    console.log(`'${text}' contains ${countCharInText(text, 'e')} es`);
  });
  console.log("That's all. Goodbye!");
  console.log('------------------------------');
}

main();
