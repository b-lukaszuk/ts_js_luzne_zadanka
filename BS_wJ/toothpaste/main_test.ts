import { assertEquals, assertThrows } from "@std/assert";
import { Cylinder, getRatios } from "./main.ts";

function areArraysEqual<A>(arr1: A[], arr2: A[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function myRound(n: number, digits: number): number {
  return parseFloat(n.toFixed(digits));
}

Deno.test(function basicErrors() {
  assertThrows(() => new Cylinder(-1, 100));
  assertThrows(() => new Cylinder(100, 0));
  assertThrows(() => new Cylinder(-2, -2));
  assertThrows(() => new Cylinder(0, 0));
});

Deno.test(function basicEqlTest() {
  const cyls: Cylinder[] = [1, 2, 3, 4, 5].map((r) => new Cylinder(r, 5));
  const ratios1: number[] = [4.0, 2.25, 1.78, 1.56, 1.44];
  const ratios2: number[] = [3.2, 1.8, 1.42, 1.25, 1.15];
  const ratios3: number[] = [2.4, 1.35, 1.07, 0.94, 0.86];
  assertEquals(
    areArraysEqual(getRatios(cyls, 1, 0).map((r) => myRound(r, 2)), ratios1),
    true,
  );
  assertEquals(
    areArraysEqual(getRatios(cyls, 1, -1).map((r) => myRound(r, 2)), ratios2),
    true,
  );
  assertEquals(
    areArraysEqual(getRatios(cyls, 1, -2).map((r) => myRound(r, 2)), ratios3),
    true,
  );
});
