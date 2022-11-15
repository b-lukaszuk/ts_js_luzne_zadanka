function every1<T>(arr: T[], predicate: (elt: T) => boolean): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return false;
    }
  }
  return true;
}

function every2<T>(arr: T[], predicate: (elt: T) => boolean): boolean {
  return !arr.some((elt: T) => !predicate(elt));
}

function isOdd(num: number): boolean {
  return num % 2 === 1;
}

function isTextAllLowercase(text: string): boolean {
  return text === text.toLocaleLowerCase();
}

function main() {
  console.log('------------------------------');
  console.log('Task 2.');
  console.log('\nevery1 (with loop) examples:');
  console.log(`every1([1, 2, 3, 4], isOdd) = ${every1([1, 2, 3, 4], isOdd)}`);
  console.log(`every1([1, 3, 5, 7], isOdd) = ${every1([1, 3, 5, 7], isOdd)}`);
  console.log('\nevery2 (with some) examples:');
  console.log(
    `every2(["Ala", "ma", "kota"], isTextAllLowercase) = ${every2(
      ['Ala', 'ma', 'kota'],
      isTextAllLowercase
    )}`
  );
  console.log(
    `every2(["do", "re", "mi"], isTextLowercase) = ${every2(
      ['do', 're', 'mi'],
      isTextAllLowercase
    )}`
  );
  console.log("\nThat's all. Goodbye!");
  console.log('------------------------------');
}

main();
