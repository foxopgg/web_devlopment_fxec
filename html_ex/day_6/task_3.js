function findHighestPaidEmployee(employees) {
    if (!Array.isArray(employees) || employees.length === 0) {
        return null; // Return null if the input is not a valid array or is empty
    }

    let highestPaid = employees[0];

    for (let i = 1; i < employees.length; i++) {
        if (employees[i].salary > highestPaid.salary) {
            highestPaid = employees[i];
        }
    }

    return { name: highestPaid.name, salary: highestPaid.salary };
}


const employees = [
    { name: "Balaji", role: "Developer", salary: 75000 },
    { name: "Dilan", role: "MSV Fuels Veeravanallur", salary: 10000000 },
    { name: "Ajmal", role: "Drug seller", salary: 82000 }
];

const highestPaid = findHighestPaidEmployee(employees);
console.log(highestPaid); 