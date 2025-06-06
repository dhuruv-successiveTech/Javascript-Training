// Q1.  Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

// Ans.

const [inputString] = process.argv.slice(2);

function removeDuplicateCharacter(str) {
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  }
  let newString = "";
  let set = "";
  for (let i = 0; i < str.length; i++) {
    if (set.indexOf(str[i]) == -1) {
      newString += str[i];
      set += str[i];
    }
  }
  console.log(newString);
}
removeDuplicateCharacter(inputString);  //"Hello Yellow"
