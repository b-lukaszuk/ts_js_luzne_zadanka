class Sphere {
  r = 0;
  constructor(radius: number) {
    this.r = radius;
  }

  getSurfaceArea(): number {
    return 4 * Math.PI * Math.pow(this.r, 2);
  }

  getVolume(): number {
    return 4 / 3 * Math.PI * Math.pow(this.r, 3);
  }
}

function getSphere(volume: number): Sphere {
  return new Sphere(Math.cbrt(volume / (4 / 3) / Math.PI));
}

function printIntro() {
  console.log("Toy program for the bile problem.");
  console.log("Warning. It may or may not work correctly.\n");
}

function printSolution() {
  const initialSphere: Sphere = new Sphere(10);
  const initialVolume: number = initialSphere.getVolume();
  const spheres: Sphere[] = [initialSphere];
  const numSpheres: number[] = [1];
  const sumOfVolumes: number[] = [spheres[0].getVolume()];
  const sumOfAreas: number[] = [spheres[0].getSurfaceArea()];
  let nextSphereId: number = 1;

  for (let nDrops = 4; nDrops < 13; nDrops += 4) {
    numSpheres.push(nDrops);
    spheres.push(getSphere(initialVolume / nDrops));
    sumOfVolumes.push(spheres[nextSphereId].getVolume() * nDrops);
    sumOfAreas.push(spheres[nextSphereId].getSurfaceArea() * nDrops);
    nextSphereId++;
  }

  for (let i = 0; i < spheres.length; i++) {
    console.log(
      `${numSpheres[i]} droplet(s):\n\t (1 droplet) = ${
        spheres[i].r.toFixed(2)
      } [um], ` +
        `sumArea = ${sumOfAreas[i].toFixed(2)} [um^2], sumVolume = ${
          sumOfVolumes[i].toFixed(2)
        } [um^3]`,
    );
  }
}

function printOutro() {
  console.log("\nThat's all. Goodbye!");
}

function main() {
  printIntro();

  printSolution();

  printOutro();
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { printSolution };
