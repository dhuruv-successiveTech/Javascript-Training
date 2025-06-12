// Q3. Convert a callback-based API to a Promise-based API
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }

// Ans.

const fetchData = (isRejected) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isRejected) {
          resolve("Data fetched successfully");
        } else {
          reject(null);
        }
      }, 1000);
    });
  } catch (error) {
    console.error(error);
  }
};
const isRejected = false;
fetchData(isRejected)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
