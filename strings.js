// 19. Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string. All characters will be lowercase.
// Examples:
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4



function charCount(str, str2) {
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str2[i] == str[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(charCount("b", "rubber"));