// Q5. Write a program to print all even number first and then all odd numbers using only one iteration

    let [limit]=process.argv.slice(2);

    let even='';
    let odd='';
    for(let i=1;i<=limit;i++){
        if(i%2===0){
            even+=i+' ';
        }
        else{
            odd+=i+' ';
        }
    }
    console.log(even+' '+odd);
    

    
    
    
    