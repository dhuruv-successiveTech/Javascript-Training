// Q3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

// Ans.

const [inputString] = process.argv.slice(2);
function variableCount(str) {
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  }  
  let count = {};
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    count[str.charAt(i)] = (count[str.charAt(i)] || 0) + 1;
  }

  for (let element in count) {
    newString += element + count[element];
  }
  return newString;
}
console.log(variableCount(inputString));
