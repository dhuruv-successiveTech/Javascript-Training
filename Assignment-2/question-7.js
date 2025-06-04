// Q7. All of the above questions from 3-6 needs to be done with arrow functions also.


    // Q3. 

    // Ans. 
        const firstName = ()=>{
            return "Avi ";
        }

        const fullName=(fname)=>{
            return fname+"Kumar";    
        }
        const myName = fullName(firstName());
        console.log(myName);

    // Q4. 

        const squareNum = (num)=>{
            return num**2;
        }

        const square = squareNum(5)
        console.log("Square is",square);


    // Q5. 
    // Ans.

        const sumFun = (num1,num2)=>{
            return num1+num2;
        }

        const sum=sumFun(5,6);
        console.log("The sum is",sum);
        
    // Q6. 

    // Ans. 

        const checkEven= (num) => {
            return num%2==0;
        }
        
        const num=6;
        checkEven(num)? console.log("Number is Even"):console.log("Number is Odd");




        