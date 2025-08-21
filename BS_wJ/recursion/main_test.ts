import { assertThrows } from "@std/assert";
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
