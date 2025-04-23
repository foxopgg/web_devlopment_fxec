// Array of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { title: "Moby Dick", author: "Herman Melville", genre: "Adventure" }
];

// Function to filter books by genre
function getBooksByGenre(genre) {
    return books.filter(book => book.genre === genre);
}

// Example usage
const darkRomanceBooks = getBooksByGenre("Dark Romance");
console.log(darkRomanceBooks);

const romanceBooks = getBooksByGenre("Romance");
console.log(romanceBooks);