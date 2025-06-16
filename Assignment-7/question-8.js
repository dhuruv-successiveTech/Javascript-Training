// Q8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

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

    const [post,user,photos] = await Promise.all([postDetails,userDetails,photosDetails])
    const details = {
      posts:post,
      user:user,
      photos:photos
    }

    console.log(details)
    
  } catch (error) {
    console.error(error);
  }
};

fetchDetails();
