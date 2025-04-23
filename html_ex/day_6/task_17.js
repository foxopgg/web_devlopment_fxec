function filterExpensiveItems(items) {
    return items.filter(item => item.price > 100);
}

// Example usage
const storeItems = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 },
    { name: 'USB Cable', price: 10 }
];

const expensiveItems = filterExpensiveItems(storeItems);
console.log(expensiveItems);
