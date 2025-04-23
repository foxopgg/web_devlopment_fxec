function logBooksWithMoreThanFiveCopies(books) {
    books.forEach(book => {
        if (book.availableCopies > 5) {
            console.log(book.title);
        }
    });
}


const libraryBooks = [
    { title: "Never have i ever", author: "Balaji", availableCopies: 3 },
    { title: "50 Shades of grey", author: "Dilan", availableCopies: 7 },
    { title: "Bared to you", author: "Ajmal", availableCopies: 10 },
    { title: "Fixed on You", author: "Ajmal", availableCopies: 2 }
];

logBooksWithMoreThanFiveCopies(libraryBooks);