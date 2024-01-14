let array: number[] = [1, 2, 3];

const forEach = <T>(arr: T[], fn: (x: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};

console.log(`printing array [${array}] elements line by line`);
forEach(array, (x: number) => console.log(x));
console.log(
  `multiplying array [${array}] elements by 2 and pringing them line by line`
);
forEach(array, (x: number) => console.log(x * 2));
