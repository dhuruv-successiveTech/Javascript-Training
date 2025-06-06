function reverseArray(arr) {
  let n = arr.length;
  let j = n - 1;
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
}

const inputArray = [1, 2, 3, 4];
reverseArray(inputArray);
console.log(inputArray);
