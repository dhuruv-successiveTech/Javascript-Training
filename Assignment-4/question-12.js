// Q12. Write a program to display intersection of two array.

// Ans.
const intersectionOfArrays=(array1, array2) => {
  const newArray = [];
  const setArray = [];

  const endLength=Math.max(array1.length,array2.length);
  for (let i = 0; i < array1.length; i++) {
    setArray.push(array1[i]);
  }

  for (let j = 0; j < endLength; j++) {
    if (setArray.includes(array2[j]) && newArray[newArray.length - 1] != array2[j]) {
      newArray.push(array2[j]);
    }
  }

  return newArray;
}

console.log(intersectionOfArrays([3], [9,3]));
