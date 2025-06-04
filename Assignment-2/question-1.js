//  Q1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

//  Ans. 
    const prev=0;
    function generateRandom(){
        const num=Math.floor(Math.random()*10)+1;  // generate a random number from 1-10
        while(prev===num){
            return generateRandom()  // if prev and current number are same then make recursive call
        }
        prev=num  // assign num to prev.
        return num;
    }   
    console.log(generateRandom());
    console.log(generateRandom());
