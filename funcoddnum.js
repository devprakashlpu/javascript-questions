// 12. write a function to print all the odd numbers in an array.


function oddNumber(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            console.log(arr[i])
        }
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
oddNumber(arr)  