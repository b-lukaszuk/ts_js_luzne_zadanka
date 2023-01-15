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
  for (let [fromLocation, toLocation] of edges.map((r) => r.split('-'))) {
    addEdge(fromLocation, toLocation);
    addEdge(toLocation, fromLocation);
  }
  return graph;
}

class Parcel {
  private place: string;
  private address: string;

  constructor(place: string, address: string) {
    this.place = place;
    this.address = address;
  }

  printInfo(): void {
    console.log('\n---Parcel---');
    console.log(`current location: ${this.place}`);
    console.log(`destination: ${this.address}`);
    console.log('------------');
  }

  getCurrentLocation(): string {
    return this.place;
  }

  getDestination(): string {
    return this.address;
  }
}

class VillageState {
  private place: string;
  private parcels: Parcel[];
  private roadGraph: Map<string, string[]>;

  constructor(
    place: string,
    parcels: Parcel[],
    roadGraph: Map<string, string[]>
  ) {
    this.place = place;
    this.parcels = parcels;
    this.roadGraph = roadGraph;
  }

  public getPlace(): string {
    return this.place;
  }

  public getParcels(): Parcel[] {
    return this.parcels;
  }

  public printParcels(): void {
    for (const parcel of this.parcels) {
      console.log(parcel);
    }
  }

  public move(destination: string): VillageState {
    if (!this.roadGraph.has(destination)) {
      return this;
    } else {
      // moving parcels and robot to new destination
      let movedParcels: Parcel[] = this.parcels.map((parcel) => {
        if (parcel.getCurrentLocation() != this.place) return parcel;
        return new Parcel(destination, parcel.getDestination());
      });
      // delivering parcels if destination/place of location is eql to address
      movedParcels = movedParcels.filter(
        (parcel) => parcel.getCurrentLocation() != parcel.getDestination()
      );
      return new VillageState(destination, movedParcels, this.roadGraph);
    }
  }
}
