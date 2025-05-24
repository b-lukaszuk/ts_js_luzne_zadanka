import { assertEquals } from "@std/assert";
import { changeToCamelCase, changeToSnakeCase } from "./main.ts";

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

Deno.test(function basicEqlTest() {
  const camels: string[] = [
    "helloWorld",
    "niceToMeetYou",
    "translateToEnglish",
  ];
  const snakes: string[] = [
    "hello_world",
    "nice_to_meet_you",
    "translate_to_english",
  ];
  assertEquals(areArraysEqual(snakes.map(changeToCamelCase), camels), true);
  assertEquals(areArraysEqual(camels.map(changeToSnakeCase), snakes), true);
});
