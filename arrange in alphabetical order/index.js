// 4. Arrange in alphabetical order.

// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.
function processBooks(books, callback) {
    
    const titles = books.map(book => book.title);
    
 
    titles.sort();
    
    
    callback(titles);
  }
  
  
  function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
 
  let obj1 = {
    title: 'ball',
    author: 'person1',
    year: 2000,
  };
  let obj2 = {
    title: 'apple',
    author: 'person2',
    year: 2001,
  };
  let obj3 = {
    title: 'cat',
    author: 'person3',
    year: 2002,
  };
  
  let books = [obj1, obj2, obj3];
  
 
  processBooks(books, logTitles);
  


