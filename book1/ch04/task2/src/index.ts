function isObject(maybeObj: any): boolean {
  if (maybeObj === null) {
    return false;
  } else {
    return typeof maybeObj === 'object';
  }
}

function deepEqual(any1: any, any2: any): boolean {
  let result: boolean = true;
  if (!isObject(any1) || !isObject(any2)) {
    result = any1 === any2;
  } else {
    if (Object.keys(any1).length !== Object.keys(any2).length) {
      result = false;
    } else {
      for (let key1 of Object.keys(any1)) {
        if (key1 in any2) {
          result = result && deepEqual(any1[key1], any2[key1]);
        } else {
          result = false;
        }
      }
    }
  }
  return result;
}

function main() {
  let toCompare1: any[] = [
    null,
    null,
    undefined,
    2,
    '2',
    2,
    { a: 1, b: { c: 1 } },
    { a: 1, b: { c: 1 } },
    { a: 1, b: { c: 1, d: 4 } },
    { a: 1, b: { c: 1, d: [1, 3, 2] } },
    { a: 1, b: { c: 1, d: [1, 3, 3] } },
    { a: 1, b: { c: 1, d: { e: 4, f: 5 } } },
    { a: 1, b: { c: 1, d: { e: 4, f: 5 } } },
    [1, 2],
    [1, 2, 3],
  ];

  let toCompare2: any[] = [
    undefined,
    null,
    undefined,
    '2',
    '2',
    2,
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 1 } },
    { a: 1, b: { c: 1 } },
    { a: 1, b: { c: 1, d: [1, 3, 3] } },
    { a: 1, b: { c: 1, d: [1, 3, 3] } },
    { a: 1, b: { c: 1, d: { e: 4, f: 5 } } },
    { a: 1, b: { c: 1, d: { e: 4, f: 6 } } },
    [1, 2],
    [1, 2],
  ];
  console.log('------------------------------');
  console.log('Task 2.');
  console.log('Deep equal examples.');
  for (let i = 0; i < toCompare1.length; i++) {
    console.log(
      `\nComparing ${JSON.stringify(toCompare1[i])} with ${JSON.stringify(
        toCompare2[i]
      )}`
    );
    console.log(`are equal? ${deepEqual(toCompare1[i], toCompare2[i])}`);
  }
  console.log("\nThat's all. Goodbye!");
  console.log('------------------------------');
}

main();
