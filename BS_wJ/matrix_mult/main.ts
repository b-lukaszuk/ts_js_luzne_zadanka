// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

function getNrows(matrix: number[][]): number {
  return matrix.length;
}

function getNcols(matrix: number[][]): number {
  return matrix[0].length;
}

function getCol(matrix: number[][], colInd: number): number[] {
  const nRows: number = getNrows(matrix);
  const col: number[] = [];
  for (let i = 0; i < nRows; i++) {
    col.push(matrix[i][colInd]);
  }
  return col;
}

function getDotProduct(row: number[], col: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < row.length; i++) {
    result.push(row[i] * col[i]);
  }
  return result;
}

function sum(arr: number[]): number {
  return arr.reduce((acc, curVal) => acc + curVal);
}

function mult(matrix1: number[][], matrix2: number[][]) {
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

export { mult };
