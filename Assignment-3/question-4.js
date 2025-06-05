// Q4. Write a program to print all even number first and then all odd numbers.

// Ans
let [range] = process.argv.slice(2);

function printEvenOdd() {
  if (isNaN(range) || range < 0) {
    console.error("!! Please enter a positive number");
    return;
  }
  for (let i = 1; i <= range; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  for (let i = 1; i <= range; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printEvenOdd();
