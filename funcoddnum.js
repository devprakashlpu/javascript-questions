// 12. write a function to print all the odd numbers in an array.


function oddNumber(){
    let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    for(let i=0; i < num.length; i++){
        if(num[i] % 2 == 1){
            console.log(num[i])
        }
    }
}

oddNumber()  