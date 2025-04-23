
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { title: "Moby Dick", author: "Herman Melville", genre: "Adventure" },
    { title: "Twilight", author: "Stephenie Meyer", genre: "Dark Romance" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" }
];


function getBooksByGenre(genre) {
    return books.filter(book => book.genre === genre);
}

const darkRomanceBooks = getBooksByGenre("Adventure");
console.log(advanceBooks);

const romanceBooks = getBooksByGenre("Dystopian");
console.log(dystopian);