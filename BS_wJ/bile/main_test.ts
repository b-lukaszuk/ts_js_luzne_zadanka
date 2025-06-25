import { assertEquals } from "@std/assert";
import { printSolution } from "./main.ts";

Deno.test(function mockTest() {
  printSolution();
  assertEquals(2 + 3, 5);
});
