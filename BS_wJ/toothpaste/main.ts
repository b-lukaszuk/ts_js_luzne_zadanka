function throwIfErrNotPositive(n: number) {
  if (n <= 0) {
    throw new Error("the number must be >= 0");
  }
}

class Cylinder {
  radius: number;
  height: number;

  constructor(r: number, h: number) {
    throwIfErrNotPositive(r);
    throwIfErrNotPositive(h);
    this.radius = r;
    this.height = h;
  }

  getVolume(): number {
    return this.height * Math.PI * this.radius ** 2;
  }

  toString(): string {
    return `Cyl(r: ${this.radius}, h: ${this.height})`;
  }
}

function getRatios(
  cylinders: Cylinder[],
  radiusChange: number,
  heightChange: number,
): number[] {
  const ratios: number[] = [];
  cylinders.forEach((c) => {
    const newRadius = c.radius + radiusChange;
    const newHeight = c.height + heightChange;
    const c2 = new Cylinder(newRadius, newHeight);
    const v1: number = c.getVolume();
    const v2: number = c2.getVolume();
    ratios.push(v2 / v1);
  });
  return ratios;
}

function printIntro() {
  console.log(
    "Toy program for the toothpaste problem.",
  );
  console.log("Warning. It may or may not work correctly.\n");
}

function printExamples(radiusChange: number, heightChange: number) {
  const cyls: Cylinder[] = [1, 2, 3, 4, 5].map((r) => new Cylinder(r, 5));
  const ratios: string[] = getRatios(cyls, radiusChange, heightChange).map(
    (r) => (r * 100).toFixed(0) + "%",
  );
  console.log("Initial cylinders:", cyls.toString());
  console.log(
    "Changing radius by",
    radiusChange,
    "and height by",
    heightChange,
  );
  console.log(
    "The obtained ratios for volumes of the cylinders (after / before) are:",
    ratios.toString(),
  );
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printExamples(1, 0);
  console.log();
  printExamples(1, -1);
  console.log();
  printExamples(1, -2);

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { Cylinder, getRatios };
