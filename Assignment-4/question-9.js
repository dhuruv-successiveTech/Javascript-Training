//Q9.  Write a program to find the last duplicate index in an array

// Ans.

const lastDuplicateIndex = (arr) => {
  const visited = [];
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (visited.indexOf(arr[i])!==-1) {
      lastIndex = i;
    } else {
      visited.push(arr[i]);
    }
  }
  return lastIndex;
}

console.log(lastDuplicateIndex([1, 7, 2, 3, 4, 9, 6,6,12]));
