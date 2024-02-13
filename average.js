// 15. write a function to find average of numbers in an array.

function average(){
    let sum = 0;
    let nums = [1,2,3,4,5,6,7,8,9,10,11,12]
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    console.log(sum / 2);
}

average()
