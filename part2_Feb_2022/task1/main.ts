import * as fs from "fs";
const fileName: string = "./unixdict.txt"

interface Dictionary<T> {
    [Key: string]: T;
};

interface Result {
    "anagrams": Dictionary<string[]>,
    "max": number
};

function getMostAnagrams(dict: string[]): Result {
    let res: Result = { "anagrams": {}, "max": 0 };
    let key: string = "";
    for (let i = 0; i < dict.length; i++) {
        key = dict[i].split("").sort().join("");
        if (!res.anagrams.hasOwnProperty(key)) {
            res.anagrams[key] = [dict[i]];
        } else {
            res.max = Math.max(res.max, res.anagrams[key].push(dict[i]));
        }
    }
    return res;
}

function printMostAnagrams(result: Result): void {
    for (let key in result.anagrams) {
        if (result.anagrams[key].length === result.max) {
            console.log(result.anagrams[key]);
        }
    }
}

function getWords(fileName: string): string[] {
    try {
        let fileContent: string = fs.readFileSync(fileName,
            { encoding: "utf-8" });
        return fileContent.split("\n");
    } catch (error) {
        console.log(
            `Could not read data from file ${fileName}\nExiting the program.`
        );
        process.exit(1);
    }
}

function main(): void {
    console.log(`Reading list of words from ${fileName}`);
    let dict: string[] = getWords(fileName);
    console.log("looking for the greatest number of anagrams in the list");
    console.log("PLEASE BE PATIENT THIS MAY TAKE SOME TIME");
    console.log("Result:")
    printMostAnagrams(getMostAnagrams(dict));
    console.log("That's all. Goodbye.");
}

// wykonanie ~ 0.06 sec
main();
