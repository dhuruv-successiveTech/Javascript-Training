// Q3. Write a function expression that takes in another function as an argument

// Ans. 
    let firstName = ()=>{
        return "Avi ";
    }

    let fullName=(fname)=>{
        return fname+"Kumar";    
    }
    let myName = fullName(firstName());
    console.log(myName);

// Q4. Write a function expression that takes in a number and returns its square.

    let squareNum = (num)=>{
        return num**2;
    }

    let square = squareNum(5)
    console.log("Square is",square);


// Q5. Write a function expression that takes in two numbers and returns their sum.
// Ans.

    let sumFun = (num1,num2)=>{
        return num1+num2;
    }

    let sum=sumFun(5,6);
    console.log("The sum is",sum);
    
// Q6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

// Ans. 

    let checkEven= (num) => {
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



    