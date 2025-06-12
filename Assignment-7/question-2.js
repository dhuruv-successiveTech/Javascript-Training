// Q2. Give an example of using multiple callback functions in a single function in JavaScript

// Ans.

const fetchDetails = (callback1, callback2, callback3) => {
  callback1(callback2(callback3()));
};

const fetchPost = (fun2) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data.slice(0, 5)))
    .catch((error) => console.error(error));
};
const fetchUser = (fun3) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data.slice(0, 5)))
    .catch((error) => console.error(error));
};
const fetchPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => console.log(data.slice(0, 5)))
    .catch((error) => console.error(error));
};
fetchDetails(fetchPost, fetchUser, fetchPhotos);
