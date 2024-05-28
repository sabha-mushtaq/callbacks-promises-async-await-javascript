// 1. Doubleusingcallback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.
let arrayofnumbers = [2, 4, 5, 67, 8, 9];

function doublenumbers(num) {
    return num * 2;
}

function call(array, func) {
    return array.map(func);
}

console.log(call(arrayofnumbers, doublenumbers));


