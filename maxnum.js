// 17. write a function to find the maximum number in an array



function maximumNumber(){
    let num = [11,22,33,44,55,66,77,101,107,87,23,99,333,433,233,123,1000,434,653,162,986,483,937,230,838,444,555,];

let max = 0;
for(let i = 0; i < num.length; i++){
    if(num[i] > max){
        max = num[i];
    }
}
console.log(max);

}

maximumNumber()