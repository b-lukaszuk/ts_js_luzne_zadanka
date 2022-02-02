import * as fs from "fs";
const fileName: string = "./unixdict.txt"

function toLowerAndSort(word: string): string {
    let lowerCaseLetters: string[] = word.toLocaleLowerCase().split('');
    let sorted: string[] = lowerCaseLetters.sort((a, b) => {
        return a.localeCompare(b);
    })
    return sorted.join('');
}

function isAnagram(word1: string, word2: string): boolean {
    let w1processed: string = toLowerAndSort(word1);
    let w2processed: string = toLowerAndSort(word2);
    return w1processed.localeCompare(w2processed) === 0;
}

// returns list of anagrams and newDict
function getAnagramsOfWord(word: string, dict: string[]): string[][] {
    let anagrams: string[] = [];
    let newDict: string[] = [];
    for (let i = 0; i < dict.length; i++) {
        if (isAnagram(word, dict[i])) {
            anagrams.push(dict[i]);
        } else {
            newDict.push(dict[i]);
        }
    }
    return [anagrams, newDict];
}

function getMostAnagrams(dict: string[]): string[] {
    let oldAnagrams: string[] = [];
    let dictCopy: string[] = [...dict];
    let newAnagrams: string[] = [];
    do {
        [newAnagrams, dictCopy] = getAnagramsOfWord(dictCopy[0], dictCopy);
        if (newAnagrams.length > oldAnagrams.length) {
            oldAnagrams = newAnagrams;
        }
    } while (dictCopy.length !== 0);
    return oldAnagrams;
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
    console.log(getMostAnagrams(dict));
    console.log("That's all. Goodbye.");
}

// wykonanie ~ 61 sec
main();
