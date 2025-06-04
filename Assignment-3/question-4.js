// Q4. Write a program to print all even number first and then all odd numbers.

    let [n]=process.argv.slice(2);

    for(let i=1;i<=n;i++){
        if(i%2===0){
            console.log(i); 
        }
    }
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i); 
        }
    }