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

function printIntro() {
  console.log("Toy program for multiplying matrices.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function printExample1() {
  const a: number[][] = [[1, 2, 3], [4, 5, 6]];
  const b: number[][] = [[7, 8], [9, 10], [11, 12]];
  myPrint(a);
  console.log("\n===example1===\n");
  console.log("\nmulitplied by\n");
  myPrint(b);
  console.log("\ngives\n");
  myPrint(mult(a, b));
}

function printExample2() {
  const a: number[][] = [[-1, 3, 5], [5, 5, 2]];
  const b: number[][] = [[3, 4], [3, -2], [4, -2]];
  console.log("\n===example2===\n");
  myPrint(a);
  console.log("\nmulitplied by\n");
  myPrint(b);
  console.log("\ngives\n");
  myPrint(mult(a, b));
}

function main() {
  printIntro();

  printExample1();
  console.log();
  printExample2();

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { mult };
