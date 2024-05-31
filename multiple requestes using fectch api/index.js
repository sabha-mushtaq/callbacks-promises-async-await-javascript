// 7. Multiple requests.

// Create an asynchronous function that retrieves data from two different API endpoints: "https:// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.


let myObject = {};

async function getData1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
}

async function getData2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return data;
}

async function fetchData() {
    const todoPromise = getData1();
    const postPromise = getData2();
    
    const [todo, post] = await Promise.all([todoPromise, postPromise]);
    
    myObject.todo = todo;
    myObject.post = post;
    
    console.log(myObject);
}

fetchData();



