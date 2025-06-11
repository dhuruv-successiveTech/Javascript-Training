// Q2. Give an example of using multiple callback functions in a single function in JavaScript

// Ans.

const multipleCallbackFun = (callback1, callback2, callback3) => {
  callback1(callback2(callback3));
};

const fun1 = (fun2) => {
  console.log("Callback 1 ....");
  fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
const fun2 = (fun3) => {
  console.log("Callback 2 ....");
  fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
const fun3 = () => {
  console.log("Callback 3 ....");
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
multipleCallbackFun(fun1, fun2, fun3());
