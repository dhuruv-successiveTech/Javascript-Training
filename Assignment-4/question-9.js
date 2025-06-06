//Q9.  Write a program to find the last duplicate index in an array

// Ans.

function lastDuplicateIndex(arr) {
  let visited = [];
  let lastIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!visited.includes(arr[i])) {
      lastIndex = i;
    } else {
      visited.push(arr[i]);
    }
  }
  console.log(lastIndex);
}

lastDuplicateIndex([1, 7, 2, 3, 4, 9, 6, 6, 6, 7, 7]);
