function displayBooksPublishedAfter2000(books) {
    books.forEach(book => {
        if (book.yearPublished > 2000) {
            console.log(book.title);
        }
    });
}

const books = [
    { title: "Never have i ever", author: "Balaji", yearPublished: 1999 },
    { title: "50 Shades of grey", author: "Dilan", yearPublished: 2005 },
    { title: "Bared to you", author: "Ajmal", yearPublished: 2010 },
];

displayBooksPublishedAfter2000(books);