// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

// Ans.
const [inputString] = process.argv.slice(2);
function camelCaseConverter(str) {
  let strArr = str.trim().split(" ");
  let newString = "";
  for (let i = 0; i < strArr.length; i++) {
    let ch = strArr[i].charCodeAt(0);
    if (ch >= 97 && ch <= 122 && i > 0) {
      newString += strArr[i].replace(String.fromCharCode(ch),String.fromCharCode(ch - 32));
    } else if (i == 0 && ch >= 65 && ch <= 90) {
      newString += strArr[i].replace(String.fromCharCode(ch),String.fromCharCode(ch + 32));
    } else {
      newString += strArr[i];
    }
  }
  console.log(newString);
}
camelCaseConverter(inputString);
