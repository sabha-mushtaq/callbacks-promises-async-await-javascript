//2 . String Manipulation.

// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.
function manipulatestring(str) {
    return logstring(str); 
}

function logstring(str) {
    console.log(`The manipulated string is: ${str.toUpperCase()}`);
}

var mystring = 'my name is engineer';
manipulatestring(mystring); 

