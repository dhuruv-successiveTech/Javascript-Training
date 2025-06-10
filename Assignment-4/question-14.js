// Q14. Write a program to reverse an array

// Ans.
const reverseArray=(arr) => {
  const n = arr.length;
  let j = n - 1;
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
  return arr
}

const inputArray = [1, 2, 3, 4];
console.log(reverseArray(inputArray));
