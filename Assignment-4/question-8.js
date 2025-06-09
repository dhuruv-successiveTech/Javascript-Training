// Q8. Write a program to remove duplicate elements from an array

// Ans.
function removeDuplicates(arr) {
  let count = {};
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (const element in count) {
    if (isNaN(element)) {
      newArray.push(element);
    } else {
      newArray.push(parseFloat(element));
    }
  }
  console.log(newArray);
}

const inputArray=[1, 74, 2, 3, 74, 4, 9, 9, 6, 6, 6]
removeDuplicates(inputArray);
