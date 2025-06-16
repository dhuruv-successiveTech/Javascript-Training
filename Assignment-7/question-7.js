// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

// Ans.

const fetchPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.slice(0, 5);
  } catch (error) {
    console.error(error);
  }
};
const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data.slice(0, 5);
  } catch (error) {
    console.error(error);
  }
};
const fetchPhotos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data.slice(0, 5);
  } catch (error) {
    console.error(error);
  }
};

const fetchDetails = async () => {
  try {
    const postDetails = fetchPost();
    const userDetails = fetchUser();
    const photosDetails = fetchPhotos();

    const response = await Promise.all([postDetails,userDetails,photosDetails])
    console.log(response);
    

  } catch (error) {
    console.error(error);
  }
};

fetchDetails();
