// Q6. Implement a function that returns a resolved Promise after a specified delay using async/await.

// Ans.

const promiseWithDelay = (delay) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved");
      }, delay);
    });
  } catch (error) {
    console.error(error);
  }
};

const resolvedPromise = async () => {
  const response = await promiseWithDelay(1000);
  console.log(response);
};

resolvedPromise();
