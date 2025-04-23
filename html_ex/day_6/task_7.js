function displayBooksPublishedAfter2000(books) {
    books.forEach(book => {
        if (book.yearPublished > 2000) {
            console.log(book.title);
        }
    });
}

const books = [
    { title: "The Silent Patient", author: "Alex Michaelides", yearPublished: 1999 },
    { title: "The Night Circus", author: "Erin Morgenstern", yearPublished: 2005 },
    { title: "Circe", author: "Madeline Miller", yearPublished: 2010 },
];

displayBooksPublishedAfter2000(books);