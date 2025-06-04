// Q2. Write a function to take input(age, name, phone no.) from user and display it.

// Ans. 
    const [myAge,myName,myPhone] = process.argv.slice(2); 
    function userDetails(){
      console.log("My age is",myAge);
      console.log("My name is",myName)
      console.log("My phone number is ",myPhone)
    }
    userDetails();
