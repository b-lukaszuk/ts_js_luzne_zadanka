class Vec {
  constructor(private x: number, private y: number) {}

  public toString(): string {
    return `Vector(${this.x}, ${this.y})`;
  }

  public plus(other: Vec): Vec {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  public minus(other: Vec): Vec {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  public get length(): number {
    // c^2 = a^2 + b^2
    let diffVec: Vec = this.minus(new Vec(0, 0));
    return Math.sqrt(diffVec.x * diffVec.x + diffVec.y * diffVec.y);
  }
}

function declareVectorsExamples(): void {
  let vectors: Vec[] = [new Vec(1, 3), new Vec(3, 0), new Vec(0, 4)];
  let vectorToAddSubtract: Vec = new Vec(2, 2);
  for (const vect of vectors) {
    console.log(`\n${vect.toString()} length = ${vect.length.toFixed(2)}`);
    console.log(
      `${vect.toString()} + ${vectorToAddSubtract.toString()} = ${vect
        .plus(vectorToAddSubtract)
        .toString()}`
    );
    console.log(
      `${vect.toString()} - ${vectorToAddSubtract.toString()} = ${vect
        .minus(vectorToAddSubtract)
        .toString()}`
    );
  }
}

function main() {
  console.log('-'.repeat(30));
  console.log('Task 1.');

  console.log('Vectors and vector operations examples.');
  declareVectorsExamples();

  console.log("\nThat's all. Goodbye!");
  console.log('-'.repeat(30));
}

main();
