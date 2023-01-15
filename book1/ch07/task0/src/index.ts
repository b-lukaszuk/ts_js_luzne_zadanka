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

function printRoads(roads: string[]): void {
  for (const road of roads) {
    console.log(road);
  }
}

function buildGraph(edges: string[]): Map<string, string> {
  let graph: Map<string, string> = new Map();
  function addEdge(fromLocation: string, toLocation: string): void {
    if (graph[fromLocation] == null) {
      graph[fromLocation] = [toLocation];
    } else {
      graph[fromLocation].push(toLocation);
    }
  }
  for (let [fromLocation, toLocation] of edges.map((r) => r.split('-'))) {
    addEdge(fromLocation, toLocation);
    addEdge(toLocation, fromLocation);
  }
  return graph;
}
const roadsGraph = buildGraph(roads);

console.log('---');
console.log('Roads:');
printRoads(roads);
console.log('---');
console.log('Graph: ');
console.log(roadsGraph);
