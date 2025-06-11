// Q1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

// Ans.

const fetchData = (callbackFun) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => callbackFun(data[0]))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};

const callbackFun = (data) => {
  console.log(data);
};

fetchData(callbackFun);
