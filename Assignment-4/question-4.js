// Q4. Write a program to convert given string to upperCase OR lowerCase.

// Ans.
const [inputString] = process.argv.slice(2);
const toLowerOrUpperCase = (str) => {
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  } 
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);    
    if (ch >= 65 && ch <= 90) {
      newString += String.fromCharCode(ch+32);
    } else if(ch>=97 && ch<=122){
      newString += String.fromCharCode(ch - 32);
    }else {
      newString +=str[i];
    }
  }
  return newString;
}
console.log(toLowerOrUpperCase(inputString));

