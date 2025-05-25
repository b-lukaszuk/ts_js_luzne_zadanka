import { assertThrows } from "@std/assert";
import { Cylinder } from "./main.ts";

Deno.test(function basicErrors() {
  assertThrows(() => new Cylinder(-1, 100));
  assertThrows(() => new Cylinder(100, 0));
  assertThrows(() => new Cylinder(-2, -2));
  assertThrows(() => new Cylinder(0, 0));
});
