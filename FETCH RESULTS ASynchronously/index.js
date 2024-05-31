// 6. Fetch results asynchronously.

// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.







fetch("https://jsonplaceholder.typicode.com/todos/1 ")


        .then((response) => response.json())

        .then((data) => console.log(data));
