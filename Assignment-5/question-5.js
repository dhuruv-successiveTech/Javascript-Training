const flattenObjectOrArray = (inputObj) => {
  let flatObj = {};
  for (const key in inputObj) {
    if (!inputObj.hasOwnProperty(key)) {
      continue;
    }
    if (typeof inputObj[key] == "object" && inputObj[key] !== null) {
      const flatObject = flattenObjectOrArray(inputObj[key]);
      for(const x in flatObject){
        if(!flatObject.hasOwnProperty(x))
        {
            continue;
        }
        flatObj[key + '.' + x] = flatObject[x];    
      }
      
    }
    else{
        flatObj[key]=inputObj[key]
    }
  }
  return flatObj;
};

const obj = {
    a:1,
    b:{c:2,d:[3,4]}
}

console.log(flattenObjectOrArray(obj));
