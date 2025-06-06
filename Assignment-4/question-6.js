// Q6. Write a program to find sum of an array

// Ans.

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const arr = [3, 5, 7, 9];
console.log(arraySum(arr));
