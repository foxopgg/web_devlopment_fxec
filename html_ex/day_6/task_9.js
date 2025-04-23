function getOutOfStockProducts(inventory) {
    return inventory
        .filter(product => product.stock === 0)
        .map(product => product.name);
}

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Mouse", price: 20, stock: 0 },
    { name: "Keyboard", price: 50, stock: 10 },
    { name: "Monitor", price: 200, stock: 0 }
];

const outOfStockProducts = getOutOfStockProducts(inventory);
console.log(outOfStockProducts); 