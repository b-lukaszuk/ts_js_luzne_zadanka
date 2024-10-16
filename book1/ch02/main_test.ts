import { assertEquals } from "@std/assert";
import { getChessboard, getChessBoardRow } from "./main.ts";

function getCharCount(text: string, char: string): number {
  let count: number = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == char) {
      count += 1;
    }
  }
  return count;
}

Deno.test(function rowLengths() {
  for (let i = 1; i < 21; i++) {
    // +1 because of \n
    assertEquals(getChessBoardRow(i).length, i + 1);
  }
});

Deno.test(function rowNumBlackFields() {
  for (let i = 1; i < 21; i++) {
    // Math.floor cause by default it starts with white field, and i may be odd
    assertEquals(getCharCount(getChessBoardRow(i), "#"), Math.floor(i / 2));
  }
});

Deno.test(function rowNumWhiteFields() {
  for (let i = 1; i < 21; i++) {
    // Math.ceil cause by default it starts with white field, and i may be odd
    assertEquals(getCharCount(getChessBoardRow(i), " "), Math.ceil(i / 2));
  }
});

Deno.test(function boardLengths() {
  for (let i = 1; i < 21; i++) {
    // +i because of \n after each row
    assertEquals(getChessboard(i).length, i * i + i);
  }
});

Deno.test(function boardNumBlackFields() {
  for (let i = 1; i < 21; i++) {
    // Math.floor cause by default it starts with white field, and i may be odd
    assertEquals(getCharCount(getChessboard(i), "#"), Math.floor((i / 2) * i));
  }
});

Deno.test(function boardNumWhiteFields() {
  for (let i = 1; i < 21; i++) {
    // Math.ceil cause by default it starts with white field, and i may be odd
    assertEquals(getCharCount(getChessboard(i), " "), Math.ceil((i / 2) * i));
  }
});
