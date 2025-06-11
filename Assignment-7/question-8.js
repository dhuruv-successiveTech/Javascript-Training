// Q8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

// Ans.

const parallelApiOperation = async () => {
  try {
    const resultantArray = [];

    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data1 = await response1.json();

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const data2 = await response2.json();

    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    const data3 = await response3.json();
    resultantArray.push(data1,data2,data3)
    console.log(resultantArray);
    
  } catch (error) {
    console.error(error);
  }
};

parallelApiOperation()