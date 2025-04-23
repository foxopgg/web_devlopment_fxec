function increaseSalaries(employees) {
    return employees.map(employee => {
        return {
            name: employee.name,
            salary: employee.salary * 1.10
        };
    });
}
const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 }
];

const updatedEmployees = increaseSalaries(employees);
console.log(updatedEmployees);