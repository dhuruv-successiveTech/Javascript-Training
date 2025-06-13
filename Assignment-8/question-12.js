// Q12. async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });

// Above function getData() is not returning any promise, but we are handling promise in the second part of function
// So we can handle this issue by return a promise in the getData function.

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
       resolve([1, 2, 3, 4, 5])
    }, 1000);
  });
}
getData().then(function (data) {
  console.log(data);
});
