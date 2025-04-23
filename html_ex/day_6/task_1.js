function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}


const shoppingCart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 2 },
    { id: 3, name: "Keyboard", price: 80, quantity: 1 }
];

console.log(calculateTotalPrice(shoppingCart)); 