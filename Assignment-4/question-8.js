// Q8. Write a program to remove dupliacte elements from an array

// Ans.
function removeDuplicates(arr) {
  let count = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1;
  }
  for (let element in count) {
    if (isNaN(element)) {
      newArray.push(element);
    } else {
      newArray.push(parseFloat(element));
    }
  }
  console.log(newArray);
}

removeDuplicates([1, 74, 2, 3, 74, 4, "9", 9, 6, 6, 6]);
