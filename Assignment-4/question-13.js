// Q13. Write a program to return inverse of an array.

// Ans.
const inverseArray = (arr) => {
  const inverse = [];
  for (let i = 0; i < arr.length; i++) {
    inverse[arr[i]] = i;
  }
  for(let i=0;i<inverse.length;i++){
    if(inverse[i]==undefined){
        inverse[i]=null;
    }
  }
  return inverse;
};

const inputArray = [9, 2, 3, 4];
console.log(inverseArray(inputArray));

