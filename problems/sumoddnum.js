// sum of odd numbers between 1 to 100


let sum = 0;
for(let i = 1;i<=100;i++){
    if(i % 2 == 1)
        sum += i;
}
console.log(sum);