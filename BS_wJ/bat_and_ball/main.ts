// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

function isMatrix(m: number[][]): boolean {
  const nRows: number = m[0].length;
  return m.every((row) => row.length === nRows);
}

function throwErrIfNotMatrix(m: number[][]) {
  if (!isMatrix(m)) {
    throw new Error("not a matrix");
  }
}

// simple solution, perhaps even without tests and sanity tests, etc.
// may or may not work correctly
function getNrows(matrix: number[][]): number {
  throwErrIfNotMatrix(matrix);
  return matrix.length;
}

function getNcols(matrix: number[][]): number {
  throwErrIfNotMatrix(matrix);
  return matrix[0].length;
}

function areMatricesCompatibleForMult(m1: number[][], m2: number[][]): boolean {
  return getNcols(m1) === getNrows(m2);
}

function throwErrIfNotSuitedForMult(m1: number[][], m2: number[][]) {
  if (!areMatricesCompatibleForMult(m1, m2)) {
    throw new Error("nCols(m1) must be equal nRows(m2)");
  }
}

function getCol(matrix: number[][], colInd: number): number[] {
  throwErrIfNotMatrix(matrix);
  const nRows: number = getNrows(matrix);
  const col: number[] = [];
  for (let i = 0; i < nRows; i++) {
    col.push(matrix[i][colInd]);
  }
  return col;
}

function getDotProduct(row: number[], col: number[]): number[] {
  if (row.length !== col.length) {
    throw new Error("cannot compute dot product");
  }
  const result: number[] = [];
  for (let i = 0; i < row.length; i++) {
    result.push(row[i] * col[i]);
  }
  return result;
}

function sum(arr: number[]): number {
  return arr.reduce((acc, curVal) => acc + curVal, 0);
}

function mult(matrix1: number[][], matrix2: number[][]) {
  throwErrIfNotMatrix(matrix1);
  throwErrIfNotMatrix(matrix2);
  throwErrIfNotSuitedForMult(matrix1, matrix2);
  const result: number[][] = [];
  for (let r = 0; r < getNrows(matrix1); r++) {
    result.push([]);
    for (let c = 0; c < getNcols(matrix2); c++) {
      result[r].push(
        sum(getDotProduct(matrix1[r], getCol(matrix2, c))),
      );
    }
  }
  return result;
}

function myPrint(matrix: number[][]) {
  throwErrIfNotMatrix(matrix);
  for (let r = 0; r < matrix.length; r++) {
    let row: string = "";
    for (let c = 0; c < getNcols(matrix); c++) {
      row += `${matrix[r][c]} `;
    }
    console.log(row);
  }
}

function is2x2matrix(matrix: number[][]): boolean {
  throwErrIfNotMatrix(matrix);
  return (getNcols(matrix) == 2) && (getNrows(matrix) == 2);
}

function throwErrIfNot2x2matrix(matrix: number[][]) {
  if (!is2x2matrix(matrix)) {
    throw new Error("not a 2x2 matrix");
  }
}

function get2x2determinant(matrix: number[][]): number {
  throwErrIfNotMatrix(matrix);
  throwErrIfNot2x2matrix(matrix);
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function get2x2determinantReciprocal(matrix: number[][]): number {
  throwErrIfNotMatrix(matrix);
  throwErrIfNot2x2matrix(matrix);
  return 1.0 / get2x2determinant(matrix);
}

function get2x2Swap(matrix: number[][]): number[][] {
  throwErrIfNotMatrix(matrix);
  throwErrIfNot2x2matrix(matrix);
  const a: number = matrix[1][1];
  const b: number = matrix[0][1] * -1.0;
  const c: number = matrix[1][0] * -1.0;
  const d: number = matrix[0][0];
  return [[a, b], [c, d]];
}

function get2x2Inverse(matrix: number[][]): number[][] {
  throwErrIfNotMatrix(matrix);
  throwErrIfNot2x2matrix(matrix);
  const detRec: number = get2x2determinantReciprocal(matrix);
  const swap: number[][] = get2x2Swap(matrix);
  const result: number[][] = [];
  for (let r = 0; r < getNrows(swap); r++) {
    result.push([]);
    for (let c = 0; c < getNcols(swap); c++) {
      result[r].push(detRec * swap[r][c]);
    }
  }
  return result;
}

function printIntro() {
  console.log("Toy program for the bat and ball problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printProblemDescription() {
  console.log("Bat and ball together cost 1 dollar.");
  console.log("The bat costs 1 dollar more than the ball");
  console.log("What is the price of the ball?\n");
}

function printSolution() {
  const a: number[][] = [[1.0, 1.0], [1.0, -1.0]];
  const b: number[][] = [[1.1], [1.0]];
  console.log("inverse of:");
  myPrint(a);
  console.log("multiplied by:");
  myPrint(b);
  const result: number[][] = mult(get2x2Inverse(a), b);
  console.log(
    `tells us that, the bat = \$${result[0][0].toFixed(2)},`,
    `the ball = \$${result[1][0].toFixed(2)}`,
  );
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printProblemDescription();
  printSolution();

  printOutro();
}

export { mult };
