// Q1.  Write a program to remove duplicate characters from a string ("Hello Yellow" => "Helo Yw")

// Ans.

const [inputString] = process.argv.slice(2);

const removeDuplicateCharacter=(str)=> {
  if(str === undefined){
    console.error("Error!! Please enter a string");
    return;
  }
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (!newString.includes(str[i])) {
      newString += str[i];
    }
  }
  return newString;
}
console.log(removeDuplicateCharacter(inputString));
 //"Hello Yellow" => "Helo Yw"
