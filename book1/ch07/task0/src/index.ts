// meadowfield
const roads: string[] = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

const roadsGraph = buildGraph(roads);

function buildGraph(edges: string[]): Map<string, string[]> {
  let graph: Map<string, string[]> = new Map();
  function addEdge(fromLocation: string, toLocation: string): void {
    if (graph.has(fromLocation)) {
      graph.get(fromLocation).push(toLocation);
    } else {
      graph.set(fromLocation, [toLocation]);
    }
  }
  for (let [fromLocation, toLocation] of edges.map((road) => road.split('-'))) {
    addEdge(fromLocation, toLocation);
    addEdge(toLocation, fromLocation);
  }
  return graph;
}

class Parcel {
  private curLocation: string;
  private destination: string;

  constructor(curLocation: string, destination: string) {
    this.curLocation = curLocation;
    this.destination = destination;
  }

  printInfo(): void {
    console.log('\n---Parcel---');
    console.log(`current location: ${this.curLocation}`);
    console.log(`destination: ${this.destination}`);
    console.log('---Parcel---');
  }

  getCurrentLocation(): string {
    return this.curLocation;
  }

  getDestination(): string {
    return this.destination;
  }
}

class VillageState {
  private curRobotLocation: string;
  private parcels: Parcel[];
  private roadGraph: Map<string, string[]>;

  constructor(
    curRobotLocation: string,
    parcels: Parcel[],
    roadGraph: Map<string, string[]>
  ) {
    this.curRobotLocation = curRobotLocation;
    this.parcels = parcels;
    this.roadGraph = roadGraph;
  }

  public getPlace(): string {
    return this.curRobotLocation;
  }

  public getParcels(): Parcel[] {
    return this.parcels;
  }

  public printParcelsInfo(): void {
    if (this.parcels.length === 0) {
      console.log('No parcels available.');
    }
    this.parcels.forEach((parcel) => {
      parcel.printInfo();
    });
  }

  public moveParcels(parcels: Parcel[], moveWhere: string): Parcel[] {
    return parcels.map((parcel) => {
      // robot picks up and moves parcel with it
      if (parcel.getCurrentLocation() === this.curRobotLocation) {
        return new Parcel(moveWhere, parcel.getDestination());
      } else {
        return parcel;
      }
    });
  }

  public removeDeliveredParcels(parcels: Parcel[]): Parcel[] {
    return parcels.filter(
      (parcel) => parcel.getCurrentLocation() !== parcel.getDestination()
    );
  }

  public moveRobot(newRobotLocation: string): VillageState {
    if (!this.roadGraph.has(newRobotLocation)) {
      return this; // returns current state of the village
    } else {
      let movedParcels: Parcel[] = this.moveParcels(
        this.parcels,
        newRobotLocation
      );
      let undeliveredParcels: Parcel[] =
        this.removeDeliveredParcels(movedParcels);
      return new VillageState(
        newRobotLocation,
        undeliveredParcels,
        this.roadGraph
      );
    }
  }
}

let first = new VillageState(
  'Post Office',
  [new Parcel('Post Office', "Alice's House")],
  roadsGraph
);

console.log("\n\n---Village's state--");
console.log('Initial village state.');
console.log(`Robot's location: ${first.getPlace()}`);
console.log('Parcels in the village:');
first.printParcelsInfo();

console.log("\n\n---Village's state--");
console.log("Moving robot to -Alice's House-");
let next = first.moveRobot("Alice's House");
console.log(`Robot's location: ${next.getPlace()}`);
console.log('Parcels in the village:');
next.printParcelsInfo();
