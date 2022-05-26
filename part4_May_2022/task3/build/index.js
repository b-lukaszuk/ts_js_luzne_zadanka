"use strict";
console.log("task3 init");
let aminoAcids = ["A", "R", "N", "D", "C", "E", "Q", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V"];
let molecularMasses = [89.094, 174.204, 132.119, 133.104, 121.154, 147.130, 146.146, 75.067, 155.156, 131.175, 131.175, 146.189, 149.208, 165.192, 115.132, 105.093, 119.119, 204.228, 181.191, 117.148];
let aminoAcidMasses = new Map();
for (let i = 0; i < aminoAcids.length; i++) {
    aminoAcidMasses.set(aminoAcids[i], molecularMasses[i]);
}
function splitAAChainToAA(molecule) {
    if (molecule.length === 0) {
        return null;
    }
    return molecule.split("");
}
function getMolecularMass(aminoAcid, defaultMass = NaN) {
    let result = aminoAcidMasses.get(aminoAcid);
    return result ? result : defaultMass;
}
function calculateMass(molecule) {
    let mass = 0;
    let parts = splitAAChainToAA(molecule);
    if (parts) {
        parts.forEach(p => mass += getMolecularMass(p));
        // AA + AA -> peptide + water
        mass -= (18.02 * (parts.length - 1));
    }
    return mass;
}
let calcitonin = "CSNLSTCVLGKLSQELHKLQTYPRTNTGSGTP";
console.log(splitAAChainToAA("ABCD"));
console.log(calculateMass("ABCD")); // should give NaN
// https://pubchem.ncbi.nlm.nih.gov/compound/Calcitonin
// should be: 3431.9
console.log("calcitonin: ", calculateMass(calcitonin), "[g/mol]");
