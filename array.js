// write a function that takes array of array and print its elements.
// example:
// print([[1,2,3], [4,5,6]]) --> 1 2 3 4 5 6

function print(arr){
    
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        for(j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
        }
    }
    
}

let arr = ([[1,2,3,4,5],[6,7,8,9,10]]);

print(arr);