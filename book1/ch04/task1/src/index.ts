type List<T> = null | {
  value: T;
  rest: List<T>;
};

function prepend<T>(someVal: T, someList: List<T>): List<T> {
  return { value: someVal, rest: someList };
}

function nth<T>(someList: List<T>, n: number = 0): T {
  if (someList === null) {
    return undefined;
  } else if (n === 0) {
    return someList.value;
  } else {
    return nth(someList.rest, n - 1);
  }
}

function arrayToList<T>(arr: T[]): List<T> {
  let result: List<T> = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = prepend(arr[i], result);
  }
  return result;
}

function listToArray<T>(someList: List<T>): T[] {
  function listToArr2(someList: List<T>, acc: T[]): T[] {
    if (someList === null) {
      return acc;
    } else {
      return listToArr2(someList.rest, [...acc, someList.value]);
    }
  }
  return listToArr2(someList, []);
}

function main() {
  console.log('------------------------------');
  console.log('Task 1.\n');
  console.log(
    `arrayToList([1, 2, 3]) = ${JSON.stringify(arrayToList([1, 2, 3]))}`
  );
  console.log(
    `listToArray({value: 1, rest: {value: 2, rest: null}}) = [${listToArray({
      value: 1,
      rest: { value: 2, rest: null },
    }).toString()}]`
  );
  console.log(`prepend("a", null) = ${JSON.stringify(prepend('a', null))}`);
  console.log(
    `nth({value: 1, rest: {value: 2, rest: null}}, 2) = ${nth(
      { value: 1, rest: { value: 2, rest: null } },
      1
    )}`
  );
  console.log("\nThat's all. Goodbye!");
  console.log('------------------------------');
}

main();
