// 16. write a function to count the number of odd and even numbers in an array.


function oddEven() {
    let oddEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,22, 16, 17, 18, 19, 20,21,22,23,24,25];
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i <= oddEven.length; i++){
        if(oddEven[i] % 2 == 1){
            oddCount++;
        }
        else{
            evenCount++;
        }
    }

    console.log("total even number is " + evenCount);
    console.log("total even number is " + oddCount);
} 

oddEven()