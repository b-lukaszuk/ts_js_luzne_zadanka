"use strict";
let elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Ar", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Ni", "Co", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "I", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Pa", "Th", "Np", "U", "Pu", "Am", "Bk", "Cm", "No", "Cf", "Es", "Hs", "Mt", "Fm", "Md", "Lr", "Rf", "Bh", "Db", "Sg", "Uun", "Uuu", "Uub"];
let molecularMasses = [1.00784, 4.002602, 6.941, 9.012182, 10.811, 12.011, 14.0067, 15.999, 18.998403, 20.1797, 22.989769, 24.305, 26.981539, 28.0855, 30.973762, 32.065, 35.453, 39.0983, 39.948, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938044, 55.845, 58.6934, 58.933195, 63.546, 65.38, 69.723, 72.63, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.906, 91.224, 92.906, 95.95, 98.9063, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.76, 126.90447, 127.6, 131.293, 132.90545, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5, 164.93032, 167.259, 168.93, 173.04, 174.967, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.08, 196.96657, 200.59, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 231.03588, 232.03806, 237.0482, 238.02891, 244, 243, 247, 247, 259, 251, 252, 269, 278, 257, 258, 262, 261, 264, 262, 269.128, 269, 282, 285];
let elementsMasses = new Map();
for (let i = 0; i < elements.length; i++) {
    elementsMasses.set(elements[i], molecularMasses[i]);
}
function splitSimplMolecToAtomsNums(molecule) {
    if (molecule.length === 0) {
        return null;
    }
    let pattern = /([A-Z][a-z]*)([0-9]*)/g;
    return molecule.match(pattern);
}
function splitAtomNumber(atomNum) {
    if (atomNum.length === 0) {
        return null;
    }
    let pattern = /([A-Z][a-z]*)|([0-9]*)/g;
    let result = atomNum.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}
function isNum(text) {
    return /^\d+$/.test(text);
}
function getMolecularMass(element, defaultMass = NaN) {
    let result = elementsMasses.get(element);
    return result ? result : defaultMass;
}
function calculateMassOfAtomNumber(atomNum) {
    let mass = 0;
    let parts = splitAtomNumber(atomNum);
    if (parts) {
        parts.forEach(p => {
            if (isNum(p)) {
                mass *= parseInt(p);
            }
            else {
                mass = getMolecularMass(p);
            }
        });
    }
    return mass;
}
function calculateMassOfSimpleMolecule(molecule) {
    let mass = 0;
    let parts = splitSimplMolecToAtomsNums(molecule);
    if (parts) {
        parts.forEach(p => {
            mass += calculateMassOfAtomNumber(p);
        });
    }
    return mass;
}
function splitComplicFormula(formula) {
    if (formula.length === 0) {
        return null;
    }
    let pattern = /\(.*?\)[0-9]*|([A-Z][a-z]*)([0-9]*)/g;
    let result = formula.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}
function splitMolecWithParenthesis(molecule) {
    if (molecule.length === 0) {
        return null;
    }
    let pattern = /\((.*?)\)|(\d)*/g;
    let result = molecule.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}
// removes external parenthesis and returns the content between ( and )
// ignores stuff, i.e. \w, outside the external parenthesis
function getParenthesisContent(molecule) {
    return molecule.replace(/(\w*)\((.*)\)(\w*)/, "$2");
}
// no nested parenthesis allowed
function calculateMassWithParenthesis(molecule) {
    let mass = 0;
    let parts = splitMolecWithParenthesis(molecule);
    if (parts) {
        parts.forEach(p => {
            if (isNum(p)) {
                mass *= parseInt(p);
            }
            else {
                mass += calculateMassOfSimpleMolecule(getParenthesisContent(p));
            }
        });
    }
    return mass;
}
// no nested parenthesis allowed
function calculateMassOfComplicatedMolecule(formula) {
    let mass = 0;
    let parts = splitComplicFormula(formula);
    if (parts) {
        parts.forEach(p => {
            if (p.includes("(")) {
                mass += calculateMassWithParenthesis(p);
            }
            else {
                mass += calculateMassOfSimpleMolecule(p);
            }
        });
    }
    return mass;
}
let molecule1 = "C6H12O6";
let molecule2 = "H3PO4";
let molecule3 = "C9H11NO3";
let molecule4 = "CaCl2";
let molecule5 = "Ca5(PO4)3OH";
let molecule6 = "Ca10(PO4)6(OH)2";
console.log(`${molecule1}:\t${calculateMassOfComplicatedMolecule(molecule1).toFixed(3)} [g/mol]`);
console.log(`${molecule2}:\t${calculateMassOfComplicatedMolecule(molecule2).toFixed(3)} [g/mol]`);
console.log(`${molecule3}:\t${calculateMassOfComplicatedMolecule(molecule3).toFixed(3)} [g/mol]`);
console.log(`${molecule4}:\t${calculateMassOfComplicatedMolecule(molecule4).toFixed(3)} [g/mol]`);
console.log(`${molecule5}:\t${calculateMassOfComplicatedMolecule(molecule5).toFixed(3)} [g/mol]`);
console.log(`${molecule6}:\t${calculateMassOfComplicatedMolecule(molecule6).toFixed(3)} [g/mol]`);
console.log(`tomek:\t${calculateMassOfComplicatedMolecule("tomek").toFixed(3)} [g/mol]`);
