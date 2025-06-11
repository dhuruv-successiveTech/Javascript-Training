// Q2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

// Ans.

const inputArray = [
  { name: "John", age: 26 },
  { name: "Raj", age: 23 },
  { name: "Doe", age: 23 },
  { name: "Krish", age: 25 },
];

const sortArrayAscending = (inputArray) => {
  try {
    return inputArray.sort((a, b) => (a.age!=b.age) ? a.age - b.age : a.name.localeCompare( b.name));
  } catch (error) {
    console.error(error);
  }
};

console.log(sortArrayAscending(inputArray)); //Array sorted on basis of age.
