//The Vowel Coutner: You need to create a function that count the number of Vowels in a given string. Consider both uppercase and lowercase vowels
function countVowels(str){
    str = str.toLowerCase();

    const vowels = ['a','e','i','o','u'];

    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

const inputString = "Aprajita";
const vowelCount = countVowels(inputString);
console.log(`${vowelCount}`);