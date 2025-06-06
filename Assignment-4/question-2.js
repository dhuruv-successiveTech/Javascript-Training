// Q2. Write a program to reverse a string ("Hello John" => "olleH nhoJ")

// Ans.

const [inputString] = process.argv.slice(2);
function reverseString(str) {
  let newStr = "";
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let ch = strArr[i];
    for (let j = ch.length - 1; j >= 0; j--) {
      newStr += ch[j];
    }
    newStr += " ";
  }
  return newStr;
}
console.log(reverseString(inputString));

// Method 2

// function reverseString2(str){
//     return str.split(' ').
// }
