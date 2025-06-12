//Q1. Write a program to iterate over object.

// Ans.

const myObject = {
  name: "John",
  age: 21,
  gender: "Male",
};

// Method 1 using for-in loop

const iterateOverObject1 = (inputObject) => {
  try {
    for (const key in inputObject) {
      console.log(`key = ${key} : value = ${inputObject[key]}`);
    }
  } catch (error) {
    console.error(error);
  }
};
console.log("Using method 1");
iterateOverObject1(myObject);

// Method 2 using Object.entries and forEach loop

const iterateOverObject2 = (inputObject) => {
  try {
    Object.entries(inputObject).forEach(([key, value]) =>
      console.log(`key = ${key} : value = ${value}`)
    );
  } catch (error) {
    console.error(error);
  }
};
console.log("Using method 2");
iterateOverObject2(myObject);

// Method 3 using Object.keys and forEach loop

const iterateOverObject3 = (inputObject) => {
  try {
    Object.keys(inputObject).forEach((key) =>
      console.log(`key = ${key} : value = ${inputObject[key]}`)
    );
  } catch (error) {
    console.error(error);
  }
};
console.log("Using method 3");

iterateOverObject3(myObject);
