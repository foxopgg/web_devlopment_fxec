// Array of books
const books = [
    { title: "Twilight", author: "Ajmal Sins", genre: "Dark Romance" },
    { title: "Fifty Shades of Grey", author: "Balaji", genre: "Dark Romance" },
    { title: "Pride and Prejudice", author: "Dilan", genre: "Romance" },
    { title: "The Notebook", author: "Ajmal Sins", genre: "Romance" },
    { title: "Wuthering Heights", author: "Dilan", genre: "Dark Romance" }
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