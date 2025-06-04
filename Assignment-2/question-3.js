// Q3. Write a function expression that takes in another function as an argument

// Ans. 
    const firstName = function (){
        return "Avi ";
    }

    const fullName=function(fname){ // Taking function as an arguement
        return fname()+"Kumar";    
    }
    const myName = fullName(firstName);
    console.log(myName);
    