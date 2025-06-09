// Q8. Write a program to remove duplicate elements from an array

// Ans.

const removeDuplicates1 = (arr) =>{
  const unique = [];
  for(let i=0;i<arr.length;i++){
    if(!unique.includes(arr[i])){
      unique.push(arr[i])
    }
  }
  return unique;
}

const inputArray=[1, 74, 2, 3, 74, 4, 9, 9, 6, 6, 6]
console.log("Using method 1",removeDuplicates1(inputArray));



const removeDuplicates2=(arr) =>{
  const count = {};
  const newArray = [];
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
  return newArray;
}

console.log("Using method 2",removeDuplicates2(inputArray));

