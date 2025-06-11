// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

// Ans.

const multipleAsyncOperation = async () => {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data1 = await response1.json();
    console.log("Fetched Data1", data1);

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const data2 = await response2.json();
    console.log("Fetched Data2", data2);

    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    const data3 = await response3.json();
    console.log("Fetched Data3", data3);
  } catch (error) {
    console.error(error);
  }
};

multipleAsyncOperation();
