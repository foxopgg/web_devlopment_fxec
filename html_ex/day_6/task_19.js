function calculateTotalSpending(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

const expenses = [
    { name: "Groceries", category: "Food", amount: 50 },
    { name: "Electricity Bill", category: "Utilities", amount: 100 },
    { name: "Gym Membership", category: "Health", amount: 40 },
    { name: "Dining Out", category: "Food", amount: 30 },
    { name: "Netflix", category: "essential", amount: 199 }
];

const totalSpending = calculateTotalSpending(expenses);
console.log("Total Spending:", totalSpending);