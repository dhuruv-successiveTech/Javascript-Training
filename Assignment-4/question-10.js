// Q10. Write a program to concatenate an input of array of arrays

// Ans.

function concatArrayOfArrays(arr) {
  let result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...concatArrayOfArrays(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(concatArrayOfArrays([[1, 2, 3], [3, 5], 6, 7, [2, 3]]));
