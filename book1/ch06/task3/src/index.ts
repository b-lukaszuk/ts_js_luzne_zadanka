interface ResultOfNext<T> {
  value: T | undefined;
  done: boolean;
}

class Group<T> {
  public static from<T>(elements: T[]): Group<T> {
    let result: Group<T> = new Group();
    for (const elt of elements) {
      result.add(elt);
    }
    return result;
  }

  private elements: T[] = [];
  private curEltId: number = 0;
  constructor() {}

  public has(element: T): boolean {
    for (const elt of this.elements) {
      if (element === elt) {
        return true;
      }
    }
    return false;
  }

  public add(element: T) {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }

  public delete(element: T) {
    this.elements = this.elements.filter((elt: T) => elt !== element);
  }

  public toString(): string {
    return `[${this.elements.toString()}]`;
  }

  public next(): ResultOfNext<T> {
    if (this.curEltId >= this.elements.length) {
      return { value: undefined, done: true };
    } else {
      return { value: this.elements[this.curEltId++], done: false };
    }
  }

  [Symbol.iterator](): Iterator<T> {
    return this;
  }
}

function declareGroupExample1(): void {
  let gr1: Group<number> = new Group();
  console.log(`\nnew Group() = ${gr1.toString()}`);
  gr1.add(1);
  console.log(`gr1.add(1) = ${gr1.toString()}`);
  gr1.add(2);
  console.log(`gr1.add(2) = ${gr1.toString()}`);
  console.log(`gr1.has(2) = ${gr1.has(2)}`);
  console.log(`gr1.has(3) = ${gr1.has(3)}`);
  console.log(`gr1.add(2) = ${gr1.toString()}`);
  gr1.add(3);
  console.log(`gr1.add(3) = ${gr1.toString()}`);
  gr1.delete(1);
  console.log(`gr1.delete(1) = ${gr1.toString()}`);
}

function declareGroupExample2(): void {
  let gr2: Group<string> = Group.from(['ala', 'ma', 'kota', 'ma', 'ala']);
  console.log(
    `\nGroup.from(["ala", "ma", "kota", "ma", "ala"]) = ${gr2.toString()}`
  );
}

function declareGroupIterationExample(): void {
  let gr1: Group<number> = Group.from([1, 2, 3, 4, 5]);
  console.log(`\nIterating over ${gr1.toString()} using iterator`);
  console.log(`for(const elt of gr1) {console.log(elt)}`);
  for (const elt of gr1) {
    console.log(elt);
  }
}

function main() {
  console.log('-'.repeat(30));
  console.log('Task 2.');
  console.log('Group and Group operations examples.');

  declareGroupExample1();
  declareGroupExample2();

  declareGroupIterationExample();

  console.log("\nThat's all. Goodbye!");
  console.log('-'.repeat(30));
}

main();
