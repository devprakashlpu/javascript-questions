// 14. write a function calculator that take 2 number and one operator and calculate.
// eg:
// calculator(1,2,'*') = 3


function calculator(a,b,c){
    if(c == '+'){
        console.log(a + b)
    }
    else if(c == '-'){
        console.log(a - b)
    }
    else if(c == '*'){
        console.log(a * b)
    }
    else if(c == '/'){
        console.log(a / b)
    }
    
    
}

console.log(calculator(22,43,'*')); 