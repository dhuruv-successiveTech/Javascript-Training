// Q4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj = {
  name: "Raj",
  age: 22,
  address: {
    city: "Noida",
  },
  subject:[
    {sub1:"Physics"},
    {sub2:"chemistry"}
  ]
};

console.log(obj);

const deepCloneOfObjectOrArrays = (inputObj) => {
    if(typeof(inputObj)!=='object'){
      return inputObj;
    }
    let deepObj;
    if(Array.isArray(inputObj))
    {
      deepObj=[];
      inputObj.map((item,index)=>deepObj[index]=deepCloneOfObjectOrArrays(item))
    }
    else{
      deepObj={};
      Object.keys(inputObj).forEach(key=>deepObj[key]=deepCloneOfObjectOrArrays(inputObj[key]))
    }
    return deepObj;
};

const cloned = deepCloneOfObjectOrArrays(obj);
// cloned.name="Rashi";
cloned.subject[0].sub1="Rashi";
console.log(cloned);

