// Q9. Write a program to print fibonacci series

// Ans. 

    let [range]=process.argv.slice(2)
        
    function fibonacci(n){
        if(isNaN(n) || n<0){
            console.error("!! Please enter a positive number");
            return;
        }
        if(n<=1){
            return n;
        }   
        return fibonacci(n-1)+fibonacci(n-2)  // Recursive call
    }

    for(let i=0;i<range;i++){
        console.log(fibonacci(i));   
    }
