// Q3. Write a function expression that takes in another function as an argument

// Ans. 
    let firstName = function (){
        return "Avi ";
    }

    let fullName=function(fname){ // Taking function as an arguement
        return fname+"Kumar";    
    }
    let myName = fullName(firstName());
    console.log(myName);
    