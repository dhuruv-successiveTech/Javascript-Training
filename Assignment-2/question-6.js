// Q6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

// Ans. 

    let checkEven=function (num){
        if(num%2===0){
            return true;
        }
        else
            return false;
    }

    let num=5;
    if(checkEven(num)==true){
        console.log("Number is Even");
    }
    else{
        console.log("Number is Odd");
    }


