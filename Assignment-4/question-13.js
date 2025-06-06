// Q13. Write a program to return inverse of an array.

// Ans. 
function inverseArray(arr){
    const inv = [];
    for(let i=0;i<arr.length;i++){
        inv[arr[i]]=i;
    }
    console.log(inv);   
}

const inputArray = [9,2,3,4];
inverseArray(inputArray);