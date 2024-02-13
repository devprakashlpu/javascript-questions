// 15. write a function to find average of numbers in an array.

function average(nums){
    let sum = 0;
   
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    console.log(sum / nums.length);
}

let nums = [2,3,4,5,6,6]

average(nums)
