// // Q7. Write a program to find index of duplicate elements in an array

// Ans. 

function indexOfDuplicates(arr) {
  let elements = {}; 
  let duplicates = []; 
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (elements[key] === undefined) {
      elements[key] = i; // First time seeing this value
    } 
    else {
      if (!duplicates.includes(elements[key])) {
        duplicates.push(elements[key]); // Add first occurrence index
      }
    }
  }
  console.log(duplicates);
}

indexOfDuplicates([1, 1, 1, 74, 2, 3, 4, 9, 9, 6, 6, 6, 100, 100]);
