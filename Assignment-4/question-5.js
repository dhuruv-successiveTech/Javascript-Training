// // Write a program to convert given string in camel case ("hello johN doe" => helloJohnDoe)

// // Ans.
const [inputString] = process.argv.slice(2);

const toUpperCase = (str) => {
  // Uppercase
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  } 
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
    if (ch >= 97 && ch <= 122) {
      newString += String.fromCharCode(ch - 32);
    } else {
      newString += str[i]
    }
  }
  return newString;
}

const toLowerCase = (str) => {
  // lowercase
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  } 
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      newString += String.fromCharCode(ch + 32);
    } else {
      newString += str[i]
    }
  }
  return newString;
}

// using method 1 user defined functions for uppercase and lowercase.

const convertToCamelCase = (str) => {
  if (str === undefined) {
    console.error("Error!! Please enter a string");
    return;
  }
  let strArr = toLowerCase(str).trim().split(" ");
  let newString = "";
  for (let i = 0; i < strArr.length; i++) {
    let ch = strArr[i].charCodeAt(0);
    if (ch >= 97 && ch <= 122 && i > 0) {
      newString += strArr[i].replace(
        String.fromCharCode(ch),
        String.fromCharCode(ch - 32)
      );
    } else if (i == 0 && ch >= 65 && ch <= 90) {
      newString += strArr[i].replace(
        String.fromCharCode(ch),
        String.fromCharCode(ch + 32)
      );
    } else {
      newString += strArr[i];
    }
  }
  return newString
}
console.log("Using method1",convertToCamelCase(inputString));

// Method 2

const toCamelCase = (str) => {
  const words = str.split(" ");
  words[0] = toLowerCase(words[0]);

  for (let i = 1; i < words.length; i++) {
    words[i] = toUpperCase(words[i][0]) + toLowerCase(words[i].slice(1));
  }

  // Join the words back together into a single string
  return words.join("");
};


const camelCaseStr = toCamelCase(inputString);
console.log("Using method2",camelCaseStr);
