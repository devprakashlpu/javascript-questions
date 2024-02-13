// 17. write a function to find the maximum number in an array



function maximumNumber(arr){
let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);

}

let arr = [11,22,33,44,55,66,77];

maximumNumber(arr)