//Q1. Write a program to iterate over object.

// Ans.

let myObject = {
  name: "xyz",
  age: 21,
  gender: "Male",
};
// Method 1
for (let key in myObject) {
  console.log(`key = ${key} : value = ${myObject[key]}`);
}

// Method 2

Object.entries(myObject).forEach(([key, value]) =>
  console.log(`key = ${key} : value = ${value}`)
);
