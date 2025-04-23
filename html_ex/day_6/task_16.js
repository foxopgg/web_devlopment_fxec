function increaseSalaries(employees) {
    return employees.map(employee => {
        return {
            name: employee.name,
            salary: employee.salary * 1.10
        };
    });
}


const employees = [
    { name: "Ajmal", salary: 50000 },
    { name: "Balaji", salary: 60000 },
    { name: "Dilan", salary: 70000 }
];

const updatedEmployees = increaseSalaries(employees);
console.log(updatedEmployees);