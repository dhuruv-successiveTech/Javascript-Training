// Q3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

// Ans.

function variableCount(str) {
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
console.log(variableCount("abcabcdabbcc"));
