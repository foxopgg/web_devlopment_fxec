const customers = [
    { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
    { name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
    { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" }
];

function sendEmails(customers) {
    customers.forEach(customer => {
        console.log(`Sending email to ${customer.name} at ${customer.email}`);
    });
}

sendEmails(customers);