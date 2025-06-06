// Q12. Write a program to display intersection of two array.

// Ans.
function intersectionOfArrays(array1, array2) {
  let newArray = [];
  let setArray = [];

  for (let i = 0; i < array1.length; i++) {
    setArray.push(array1[i]);
  }

  for (let j = 0; j < setArray.length; j++) {
    if (
      setArray.includes(array2[j]) &&
      newArray[newArray.length - 1] != array2[j]
    ) {
      newArray.push(array2[j]);
    }
  }

  console.log(newArray);
}

intersectionOfArrays([3, 6, 2, 1, 1, 9], [9, 6, 5, 2, 1, 1]);
