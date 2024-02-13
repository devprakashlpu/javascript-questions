// 16. write a function to count the number of odd and even numbers in an array.


function oddEven(nums) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i <= nums.length; i++){
        if(nums[i] % 2 == 1){
            oddCount++;
        }
        else{
            evenCount++;
        }
    }

    console.log("total even number is " + evenCount);
    console.log("total odd number is " + oddCount);
} 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13];


oddEven(nums)