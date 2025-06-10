// Q3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

// Ans.

const inputArray = [
  { name: "John", age: 26 , id:1},
  { name: "Raj", age: 21 , id:2},
  { name: "Doe", age: 23 , id:3},
  { name: "Krish", age: 25 , id:4}
];

inputArray.forEach(element=>(
    delete element.id
))
console.log(inputArray);
