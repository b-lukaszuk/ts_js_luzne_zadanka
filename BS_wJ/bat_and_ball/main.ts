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

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printProblemDescription();

  printOutro();
}

export { mult };
