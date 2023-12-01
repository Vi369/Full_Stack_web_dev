function bookDetails(arrayOfBooks, callback){
    const titleOfTheBooksArrays = arrayOfBooks.map((eachBook)=>{
        return eachBook.title;
    })
    return callback(titleOfTheBooksArrays);
}

function sortInAsendingOrder(booksTitles){
    return booksTitles.sort();
}


//books data 
const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishYear: 1951,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publishYear: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishYear: 1925,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishYear: 1937,
    },
    // Add more book objects as needed
  ];

// calling the function 
console.log(bookDetails(books, sortInAsendingOrder));


