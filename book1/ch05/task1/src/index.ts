function flatten2dArr<T>(arr2d: T[][]): T[] {
  return arr2d.reduce((acc: T[], curElt: T[]) => acc.concat(curElt));
}

// don't know why but arr1d and arr2d are printed as arr1d
function toStringArr<T>(arr1dOrArr2d: T[], toArr2d: boolean = true) {
  let result: string = toArr2d ? '[[' : '[';
  result += arr1dOrArr2d.join(toArr2d ? '], [' : ', ');
  return result + (toArr2d ? ']]' : ']');
}

function main() {
  console.log('------------------------------');
  console.log('Task 1.');
  console.log('Flatten2dArr examples.\n');
  let example1: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ];
  console.log(
    `${toStringArr(example1)} -> ${toStringArr(flatten2dArr(example1), false)}`
  );
  let example2: string[][] = [['ala', 'ma'], ['kota']];
  console.log(
    `${toStringArr(example2)} -> ${toStringArr(flatten2dArr(example2), false)}`
  );
  let example3: string[][] = [
    ['a', 'b'],
    ['c', 'd', 'e'],
    ['f', 'g'],
  ];
  console.log(
    `${toStringArr(example3)} -> ${toStringArr(flatten2dArr(example3), false)}`
  );
  console.log("\nThat's all. Goodbye!");
  console.log('------------------------------');
}

main();
