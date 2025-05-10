import { assertEquals, assertThrows } from "@std/assert";
import {
  get2x2determinant,
  get2x2determinantReciprocal,
  get2x2Inverse,
  get2x2Swap,
  mult,
} from "./main.ts";

function areArraysEqual<A>(arr1: A[][], arr2: A[][]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let r = 0; r < arr1.length; r++) {
    if (arr1[r].length !== arr2[r].length) {
      return false;
    }
    for (let c = 0; c < arr1[r].length; c++) {
      if (arr1[r][c] !== arr2[r][c]) {
        return false;
      }
    }
  }
  return true;
}

Deno.test(function basicEquals() {
  const a: number[][] = [[1, 2, 3], [4, 5, 6]];
  const b: number[][] = [[7, 8], [9, 10], [11, 12]];
  const c: number[][] = [[58, 64], [139, 154]];
  assertEquals(areArraysEqual(mult(a, b), c), true);

  const d: number[][] = [[-1, 3, 5], [5, 5, 2]];
  const e: number[][] = [[3, 4], [3, -2], [4, -2]];
  const f: number[][] = [[26, -20], [38, 6]];
  assertEquals(areArraysEqual(mult(d, e), f), true);
});

Deno.test(function basicErrors() {
  const a: number[][] = [[1, 2], [1, 2, 3]];
  const b: number[][] = [[1, 2, 3], [4, 5, 6]];
  const c: number[][] = [[7, 8, 9], [7, 8, 9]];

  assertThrows(() => mult(a, a));
  assertThrows(() => mult(b, c));
});

Deno.test(function matrix2x2Equals() {
  const a: number[][] = [[3, 7], [1, -4]];
  const b: number[][] = [[-1, 3 / 2], [1, -1]];
  assertEquals(get2x2determinant(a), -19);
  assertEquals(get2x2determinantReciprocal(a), -1 / 19);
  assertEquals(get2x2Swap(b), [[-1, -3 / 2], [-1, -1]]);
  assertEquals(get2x2Inverse(b), [[2, 3], [2, 2]]);
});

Deno.test(function matrix2x2Errors() {
  const a: number[][] = [[1, 2, 3], [4, 5, 6]];
  const b: number[][] = [[7, 8], [7, 8, 9]];

  assertThrows(() => get2x2determinant(a));
  assertThrows(() => get2x2determinantReciprocal(a));
  assertThrows(() => get2x2Swap(a));
  assertThrows(() => get2x2Inverse(a));

  assertThrows(() => get2x2determinantReciprocal(b));
  assertThrows(() => get2x2Swap(b));
  assertThrows(() => get2x2Inverse(b));
  assertThrows(() => get2x2Inverse(b));
});
