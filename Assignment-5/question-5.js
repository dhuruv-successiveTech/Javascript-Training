//Q5  Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const inputObj = {
  a: 1,
  b: { c: 2, d: [3, 4,5] },
};

const flattenObjectOrArray = (inputObj) => {
  const flatObject = {};
  for (const key in inputObj) {
    if (!inputObj.hasOwnProperty(key)) {
      continue;
    }
    if (typeof inputObj[key] == "object" && inputObj[key] !== null) {
      const innerObject = flattenObjectOrArray(inputObj[key]);
      for (const x in innerObject) {
        if (!innerObject.hasOwnProperty(x)) {
          continue;
        }
        flatObject[key + "." + x] = innerObject[x];
      }
    } else {
      flatObject[key] = inputObj[key];
    }
  }
  return flatObject;
};

console.log(flattenObjectOrArray(inputObj));
