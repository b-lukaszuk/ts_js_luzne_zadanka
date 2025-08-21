import { assertEquals, assertThrows } from "@std/assert";
import { recFactorial, recFib } from "./main.ts";

Deno.test(function basicErrors() {
  let map = new Map();
  map.set(0, 0);
  map.set(1, 1);

  assertThrows(() => recFactorial(-1));
  assertThrows(() => recFactorial(-0.01));
  assertThrows(() => recFactorial(0));

  assertThrows(() => recFib(-100, map));
  assertThrows(() => recFib(-1, map));
  assertThrows(() => recFib(-0.01, map));
});

Deno.test(function basicEquals() {
  let facts = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
  let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  let map = new Map();
  map.set(0, 0);
  map.set(1, 1);

  for (let i = 1; i <= 10; i++) {
    assertEquals(recFactorial(i), facts[i]);
  }

  for (let i = 0; i <= 10; i++) {
    assertEquals(recFib(i, map), fibs[i]);
  }
});
