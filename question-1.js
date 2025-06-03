//  Q1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

//  Ans. 
    let prev=0;
    function generateRandom(){
        let num=Math.floor(Math.random()*10)+1;
        while(prev===num){
            return generateRandom()
        }
        prev=num
        return num;
    }   
    console.log(generateRandom());
    console.log(generateRandom());


