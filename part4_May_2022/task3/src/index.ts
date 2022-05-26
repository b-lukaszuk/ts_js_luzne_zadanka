console.log("task3 init");

let aminoAcids: string[] = ["A", "R", "N", "D", "C", "E", "Q", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V"];

let molecularMasses: number[] = [89.094, 174.204, 132.119, 133.104, 121.154, 147.130, 146.146, 75.067, 155.156, 131.175, 131.175, 146.189, 149.208, 165.192, 115.132, 105.093, 119.119, 204.228, 181.191, 117.148];

let aminoAcidMasses: Map<string, number> = new Map();

for (let i = 0; i < aminoAcids.length; i++) {
    aminoAcidMasses.set(aminoAcids[i], molecularMasses[i]);
}

function splitAAChainToAA(molecule: string): RegExpMatchArray | null {
    if (molecule.length === 0) { return null; }
    return molecule.split("");
}

console.log(splitAAChainToAA("ABCD"));
