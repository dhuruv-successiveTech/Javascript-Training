// Q2. Write a program to reverse a string ("Hello John" => "olleH nhoJ")

// Ans.

const [inputString] = process.argv.slice(2);
const reverseString = (str) => {
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  }  
  let newString = "";
  const strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    let ch = strArray[i];
    for (let j = ch.length - 1; j >= 0; j--) {
      newString += ch[j];
    }
    newString += " ";
  }
  return newString;
}
console.log("Using method1 ",reverseString(inputString));

// Method 2

const reverseString2 = (str) => {
    if(str === undefined){
      console.error("Error!! Please enter a string");
      return;
    }
    return str.split(' ').map((element)=>element.split('').reverse().join('')).join(' ');
}

console.log("Using method2 ",reverseString2(inputString));