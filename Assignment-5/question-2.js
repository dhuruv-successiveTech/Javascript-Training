// Q2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

// Ans.

const inputArray = [
  { name: "John", age: 26 },
  { name: "Raj", age: 21 },
  { name: "Doe", age: 23 },
  { name: "Krish", age: 25 },
];

const sortArrayAscending = (inputArray) => {
  return inputArray.sort((a, b) => a.age - b.age);
};

console.log(sortArrayAscending(inputArray)); //Array sorted on basis of age.
