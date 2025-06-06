// Q2. Write a program to reverse a string ("Hello John" => "olleH nhoJ")

// Ans.
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
console.log(reverseString("Hello John"));
