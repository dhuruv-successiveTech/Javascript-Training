// Q9. Write a program to print fibonaaci series

function fibonacci(n){
    if(n<=1){
        return n;
    }   
    return fibonacci(n-1)+fibonacci(n-2)  // Recursive call
}

for(let i=0;i<10;i++){
    console.log(fibonacci(i));   
}
