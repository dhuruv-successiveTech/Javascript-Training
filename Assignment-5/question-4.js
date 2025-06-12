// Q4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const inputObj = {
  name: "Raj",
  age: 22,
  address: {
    city: "Noida",
  },
  subject: [{ sub1: "Physics" }, { sub2: "Chemistry" }],
};

console.log("Original Object :", inputObj);

const deepCloneOfObjectOrArrays = (inputObj) => {
  try {
    if (typeof inputObj !== "object") {
      return inputObj;
    }
    let deepObj;
    if (Array.isArray(inputObj)) {
      deepObj = [];
      inputObj.forEach(
        (item, index) => (deepObj[index] = deepCloneOfObjectOrArrays(item))
      );
    } else {
      deepObj = {};
      Object.keys(inputObj).forEach(
        (key) => (deepObj[key] = deepCloneOfObjectOrArrays(inputObj[key]))
      );
    }
    return deepObj;
  } catch (error) {
    console.error(error);
    
  }
};

const clonedObject = deepCloneOfObjectOrArrays(inputObj);
clonedObject.subject[0].sub1 = "English";
clonedObject.name = "doe";
clonedObject.address.city = "Delhi";

console.log("Deep Cloned Object :", clonedObject);
