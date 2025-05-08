import { assertEquals } from "@std/assert";
import { mult } from "./main.ts";

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
