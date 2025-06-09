// Q6. Write a program to find sum of an array

// Ans.

const arraySum = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}
const arr = [3, 5, 7, 9];
console.log(arraySum(arr));
