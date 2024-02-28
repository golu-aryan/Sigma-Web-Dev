//The Sum Selector: You are working on a function that counts the number vowels in a given string. Consider both uppercase and lowercase vowels
function countVowel(str){
    //Using a regular expression to match vowels (both uppercase and lowercase)
    const vowelRegex = /[aeiouAEIOU]/g;
    //Use match() to find all matches of the vowel regex in the string
    const matches = str.match(vowelRegex);

    //Return the count of matched vowels, or 0 if no vowels are found
    return matches? matches.length : 0;
}

let inputString = "Aryan kumar";
let vowelCount = countVowel(inputString);

console.log(`Number of vowels in "${inputString}":${vowelCount}`);