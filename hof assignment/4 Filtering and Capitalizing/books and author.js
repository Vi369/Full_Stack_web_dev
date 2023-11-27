const listOfbooks = [
    { title: "rich dad poor dad",
    author: "Robert Kiyosaki",
    year: 1997},
    { title: "girl in room 105",
    author: "Chetan Bhagat",
    year: 2018},
    { title: "change of heart",
    author: "jodi Picoult",
    year: 2008}
];

const remainingBooks = [];

const bookBefore2008 = listOfbooks.filter((book)=>{
    if(book.year < 2010){
        return book;
    }else{
        remainingBook.push(book);
        book.author = book.author.toUpperCase();
    }
});

//testing (:
console.log(bookBefore2008); 
console.log(remainingBook);