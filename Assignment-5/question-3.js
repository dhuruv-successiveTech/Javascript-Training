// Q3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

// Ans.

const inputArray = [
  { name: "John", age: 26, id: 1 },
  { name: "Raj", age: 21, id: 2 },
  { name: "Doe", age: 23, id: 3 },
  { name: "Krish", age: 25, id: 4 },
];

// Method 1 using forEach loop and delete.
const removeIdKey1 = (inputArray) => {
  try {
    inputArray.forEach((element) => delete element.id);
  } catch (error) {
    console.error(error);
  }
};

removeIdKey1(inputArray);
console.log("Using method 1 :",inputArray);

// Method 2 using map and rest.

const removeIdKey2 = (inputArray) => {
 try {
   return inputArray.map(({id,...rest})=>({...rest}))
 } catch (error) {
  console.error(error);  
 }
}

console.log("Using method 2 :",removeIdKey2(inputArray));
