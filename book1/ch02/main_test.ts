import { assertEquals } from "@std/assert";
import { getChessBoardRow, getChessboard } from "./main.ts";

Deno.test(function rowLengths() {
  for (var i = 1; i < 11; i++) {
    // +1 because of \n
    assertEquals(getChessBoardRow(i).length, i + 1);
  }
});


Deno.test(function boardLengths() {
  for (var i = 1; i < 11; i++) {
    // +i because of \n after each row
    assertEquals(getChessboard(i).length, i * i + i);
  }
});