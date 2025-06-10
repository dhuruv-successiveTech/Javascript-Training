// // Q7. Write a program to find index of duplicate elements in an array

// Ans.

const indexOfDuplicates = (arr) => {
  const elements = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (elements[key]!==undefined){
      duplicates.push(i);  //if value is not undefined then push its value into duplicates.
    } else {
      elements[key] = i; // if value of key is undefined then give it the index as value.
    }
  }
  return duplicates;
};

console.log(indexOfDuplicates([1, 1, 1, 74, 2, 3, 4, 9, 9, 6, 6, 6, 100, 100]));
