function getChessBoardRow(
  nCols: number = 8,
  startWithBlackField: boolean = false
): string {
  let row: string = '';
  for (let c = 0; c < nCols; c++) {
    row += startWithBlackField ? '#' : ' ';
    startWithBlackField = !startWithBlackField;
  }
  return row + '\n';
}

function getChessboard(squareSideLength: number = 8) {
  let chessboard: string = '';
  let startWithBlackField: boolean = false;
  for (let r = 0; r < squareSideLength; r++) {
    chessboard += getChessBoardRow(squareSideLength, startWithBlackField);
    startWithBlackField = !startWithBlackField;
  }
  return chessboard;
}

function printChessboardsOfDifferentSizes(
  squareSideLengthMinIncl: number = 7,
  squareSideLengthMaxIncl: number = 8
): void {
  for (let i = squareSideLengthMinIncl; i < squareSideLengthMaxIncl + 1; i++) {
    console.log(`\nPrinting chessboard of size ${i}x${i}\n`);
    console.log(getChessboard(i));
  }
}

function main() {
  console.log('------------------------------');
  console.log('Task 1.');
  printChessboardsOfDifferentSizes(6, 10);
  console.log("That's all. Goodbye!");
  console.log('------------------------------');
}

main();
