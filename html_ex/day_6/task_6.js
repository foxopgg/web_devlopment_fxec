const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Book", price: 15, category: "Stationery" },
    { name: "Headphones", price: 150, category: "Electronics" }
];

function displayElectronics(products) {
    products.forEach(product => {
        if (product.category === "Electronics") {
            console.log(`Name: ${product.name}, Price: $${product.price}`);
        }
    });
}

displayElectronics(products);