// // Q7. Write a program to find index of duplicate elements in an array

function indexOfDuplicates(arr) {
  let elements = {}; // Store first occurrence index
  let duplicates = []; // Store first index of duplicates
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (elements[value] === undefined) {
      elements[value] = i; // First time seeing this value
    } else {
      if (!duplicates.includes(elements[value])) {
        duplicates.push(elements[value]); // Add first occurrence index
      }
    }
  }
  console.log(duplicates);
}

// Example usage
indexOfDuplicates([1, 1, 1, 74, 2, 3, 4, 9, 9, 6, 6, 6, 100, 100]);
