// Q7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

function doubleTheNumber(){
    let i=1;
    while(i<4096){
        i*=2;
        console.log(i); 
    }
}
doubleTheNumber()