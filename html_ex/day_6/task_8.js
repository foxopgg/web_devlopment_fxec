function logBooksWithMoreThanFiveCopies(books) {
    books.forEach(book => {
        if (book.availableCopies > 5) {
            console.log(book.title);
        }
    });
}

const libraryBooks = [
    { title: "The Silent Patient", author: "Alex Michaelides", availableCopies: 3 },
    { title: "Atomic Habits", author: "James Clear", availableCopies: 7 },
    { title: "The Alchemist", author: "Paulo Coelho", availableCopies: 10 },
    { title: "Educated", author: "Tara Westover", availableCopies: 2 }
];

logBooksWithMoreThanFiveCopies(libraryBooks);