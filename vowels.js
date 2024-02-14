// 21. Create a function that takes a string and returns the number (count) of vowels contained within it.
// Examples:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

let countVowels = 0;
function vowels(str){
    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < arguments[i].length; j++){
            if(arguments[i][j] == "a" || arguments[i][j] == "e" || arguments[i][j] == "i" || arguments[i][j] == "o" || arguments[i][j] == "u"){
                countVowels++;
            }
        }
    }
    return countVowels;

}

console.log(vowels("i love my india"));