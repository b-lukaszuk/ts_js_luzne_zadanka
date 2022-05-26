console.log("task3 init");

let aminoAcids: string[] = ["A", "R", "N", "D", "C", "E", "Q", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V"];

let molecularMasses: number[] = [89.094, 174.204, 132.119, 133.103, 121.15, 147.130, 146.146, 75.067, 155.157, 131.175, 146.190, 149.21, 165.192, 115.132, 105.093, 119.120, 204.229, 181.191, 117.148];

let aminoAcidMasses: Map<string, number> = new Map();

for (let i = 0; i < aminoAcids.length; i++) {
    aminoAcidMasses.set(aminoAcids[i], molecularMasses[i]);
}
