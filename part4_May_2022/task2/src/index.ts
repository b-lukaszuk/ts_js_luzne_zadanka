let elements: string[] = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Ar", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Ni", "Co", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "I", "Te", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Pa", "Th", "Np", "U", "Pu", "Am", "Bk", "Cm", "No", "Cf", "Es", "Hs", "Mt", "Fm", "Md", "Lr", "Rf", "Bh", "Db", "Sg", "Uun", "Uuu", "Uub"];

let molecularMasses: number[] = [1.00797, 4.0026, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179, 22.98977, 24.305, 26.98154, 28.0855, 30.97376, 32.06, 35.453, 39.0983, 39.948, 40.08, 44.9559, 47.9, 50.9415, 51.996, 54.938, 55.847, 58.7, 58.9332, 63.546, 65.38, 69.72, 72.59, 74.9216, 78.96, 79.904, 83.8, 85.4678, 87.62, 88.9059, 91.22, 92.9064, 95.94, 98, 101.07, 102.9055, 106.4, 107.868, 112.41, 114.82, 118.69, 121.75, 126.9045, 127.6, 131.3, 132.9054, 137.33, 138.9055, 140.12, 140.9077, 144.24, 145, 150.4, 151.96, 157.25, 158.9254, 162.5, 164.9304, 167.26, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.85, 186.207, 190.2, 192.22, 195.09, 196.9665, 200.59, 204.37, 207.2, 208.9804, 209, 210, 222, 223, 226.0254, 227.0278, 231.0359, 232.0381, 237.0482, 238.029, 242, 243, 247, 247, 250, 251, 252, 255, 256, 257, 258, 260, 261, 262, 262, 263, 269, 272, 277];

let elementsMasses: Map<string, number> = new Map();

for (let i = 0; i < elements.length; i++) {
    elementsMasses.set(elements[i], molecularMasses[i]);
}

function splitSimplMolecToAtomsNums(molecule: string): RegExpMatchArray | null {
    if (molecule.length === 0) { return null; }
    let pattern: RegExp = /([A-Z][a-z]*)([0-9]*)/g;
    return molecule.match(pattern);
}

function splitAtomNumber(atomNum: string): string[] | null {
    if (atomNum.length === 0) { return null; }
    let pattern: RegExp = /([A-Z][a-z]*)|([0-9]*)/g;
    let result: RegExpMatchArray | null = atomNum.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}

function isNum(text: string): boolean {
    return /^\d+$/.test(text);
}

function getMolecularMass(element: string, defaultMass: number = 0): number {
    let result: number | undefined = elementsMasses.get(element);
    return result ? result : defaultMass;
}

function calculateMassOfAtomNumber(atomNum: string): number {
    let mass: number = 0;
    let parts: string[] | null = splitAtomNumber(atomNum);
    if (parts) {
        parts.forEach(p => {
            if (isNum(p)) {
                mass *= parseInt(p);
            } else {
                mass = getMolecularMass(p);
            }
        })
    }
    return mass;
}

function calculateMassOfSimpleMolecule(molecule: string): number {
    let mass: number = 0;
    let parts: string[] | null = splitSimplMolecToAtomsNums(molecule);
    if (parts) {
        parts.forEach(p => {
            mass += calculateMassOfAtomNumber(p);
        })
    }
    return mass;
}

function splitComplicFormula(formula: string): RegExpMatchArray | null {
    if (formula.length === 0) { return null; }
    let pattern: RegExp = /\(.*?\)[0-9]*|([A-Z][a-z]*)([0-9]*)/g;
    let result: RegExpMatchArray | null = formula.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}

function splitMolecWithParenthesis(molecule: string): RegExpMatchArray | null {
    if (molecule.length === 0) { return null; }
    let pattern: RegExp = /\((.*?)\)|(\d)*/g;
    let result: RegExpMatchArray | null = molecule.match(pattern);
    return result ? result.filter(elt => elt !== "") : null;
}

function getParenthesisContent(molecule: string): string {
    let pattern: RegExp = /\(|\)/g;
    return molecule.replace(pattern, "");
}

// no nested parenthesis allowed
function calculateMassWithParenthesis(molecule: string): number {
    let mass: number = 0;
    let parts: string[] | null = splitMolecWithParenthesis(molecule);
    if (parts) {
        parts.forEach(p => {
            if (isNum(p)) {
                mass *= parseInt(p);
            } else {
                mass += calculateMassOfSimpleMolecule(getParenthesisContent(p));
            }
        })
    }
    return mass;
}

// no nested parenthesis allowed
function calculateMassOfComplicatedMolecule(formula: string): number {
    let mass: number = 0;
    let parts: string[] | null = splitComplicFormula(formula);
    if (parts) {
        parts.forEach(p => {
            if (p.includes("(")) {
                mass += calculateMassWithParenthesis(p);
            } else {
                mass += calculateMassOfSimpleMolecule(p);
            }
        })
    }
    return mass;
}


let molecule1: string = "C6H12O6";
let molecule2: string = "H3PO4";
let molecule3: string = "C9H11NO3";
let molecule4: string = "CaCl2";
let molecule5: string = "Ca5(PO4)3OH";
let molecule6: string = "Ca10(PO4)6(OH)2";

console.log(`${molecule1}:\t${calculateMassOfComplicatedMolecule(molecule1).toFixed(3)} [g/mol]`);
console.log(`${molecule2}:\t${calculateMassOfComplicatedMolecule(molecule2).toFixed(3)} [g/mol]`);
console.log(`${molecule3}:\t${calculateMassOfComplicatedMolecule(molecule3).toFixed(3)} [g/mol]`);
console.log(`${molecule4}:\t${calculateMassOfComplicatedMolecule(molecule4).toFixed(3)} [g/mol]`);
console.log(`${molecule5}:\t${calculateMassOfComplicatedMolecule(molecule5).toFixed(3)} [g/mol]`);
console.log(`${molecule6}:\t${calculateMassOfComplicatedMolecule(molecule6).toFixed(3)} [g/mol]`);
