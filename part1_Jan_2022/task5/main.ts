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

function getAnagramsOfWord(word: string, dict: string[]): string[] {
    return dict.filter((item) => {
        return isAnagram(word, item);
    });
}

function remAnagramsOfWord(word: string, dict: string[]): string[] {
    return dict.filter((item) => {
        return !isAnagram(word, item);
    });
}
