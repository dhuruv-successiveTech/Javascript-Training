// Q2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

// Ans.

let inputArray = [
  { name: "John", age: 26 , id:1},
  { name: "Raj", age: 21 , id:2},
  { name: "Doe", age: 23 , id:3},
  { name: "Krish", age: 25 , id:4}
];

inputArray.forEach(element=>(
    delete element.id
))
console.log(inputArray);
