// function to find vowels in a string

function vowels(str){
    let countVowels = 0;
    for(let i = 0; i < str.length; i++){
            if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
                countVowels++;
            }
    }
    return countVowels;

}

console.log(vowels("i love my india"));
