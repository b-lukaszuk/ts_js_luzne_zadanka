type List<T> = null | {
  value: T;
  rest: List<T>;
};

function getString<T>(l: List<T>): string {
  if (l === null) {
    return "Nil";
  } else {
    return `${l.value} : ${getString(l.rest)}`;
  }
}

function prepend<T>(someVal: T, someList: List<T>): List<T> {
  return { value: someVal, rest: someList };
}

function nth<T>(someList: List<T>, n: number = 0): T | undefined {
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

function main(): void {
  let a1: number[] = [1, 2, 3];
  let l1: List<number> = { value: 1, rest: { value: 2, rest: null } };
  let e1: List<string> = null;
  let char: string = "a";
  console.log(
    `transforming [${a1}] to list, result: [${getString(arrayToList(a1))}]`,
  );
  console.log(
    `transforming [${getString(l1)}] to array, result: [${listToArray(l1)}]`,
  );
  console.log(
    `prepending '${char}' to '${e1}' result [${getString(prepend(char, e1))}]`,
  );
  console.log(
    `getting elt with ind 1 from [${getString(l1)}] result: ${nth(l1, 1)}`,
  );
}

main();
