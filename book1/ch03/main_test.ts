import { assertEquals } from "@std/assert";
import { countCharInText } from "./main.ts";

Deno.test("is 'B' in 'bbbbbbb'? case insensitive", () => {
  let txt: string = "bbbbbbb";
  assertEquals(countCharInText(txt, "B", false), 0);
});

Deno.test("is 'B' in 'bbbbbbb'? case sensitive", () => {
  let txt: string = "bbbbbbb";
  assertEquals(countCharInText(txt, "B", true), txt.length);
});

Deno.test("is 'b' in 'bbbbbbb'? case insensitive", () => {
  let txt: string = "bbbbbbb";
  assertEquals(countCharInText(txt, "b", false), txt.length);
});

Deno.test("is 'k' in 'bbbbbbb'? case insensitive", () => {
  let txt: string = "bbbbbbb";
  assertEquals(countCharInText(txt, "k", false), 0);
});

Deno.test("is 'k' in 'bbbbbbb'? case sensitive", () => {
  let txt: string = "bbbbbbb";
  assertEquals(countCharInText(txt, "k", true), 0);
});
