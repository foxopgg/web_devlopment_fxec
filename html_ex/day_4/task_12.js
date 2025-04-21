function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels in 'Loose Punda':", countVowels("Loose Punda"));
