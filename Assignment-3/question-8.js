// Q8. Write a program to display number from 1-20 using all types of loops

// Ans. 

    // Using for loop

    for(let i=1;i<=20;i++){
        console.log(i);
    }

    // using do while loop

    let i=1;
    do{
        console.log(i);
        i++;    
    }while(i<=20);

    // while loop

    let j=1;
    while(j<=20)
    {
        console.log(j);
        j++;    
    }

    // forEach loop

    const arr = Array.from({ length: 20 }, (_, i) => i + 1);
    arr.forEach((num)=>(console.log(num)))

    // for of loop

    for(let element of arr){
        console.log(element);        
    }
