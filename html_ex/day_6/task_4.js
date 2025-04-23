function getPassingStudents(students) {
    return students
        .filter(student => student.score >= 50)
        .map(student => student.name);
}

const students = [
    { name: 'Alice', age: 20, score: 85 },
    { name: 'Bob', age: 22, score: 45 },
    { name: 'Charlie', age: 19, score: 72 },
    { name: 'Diana', age: 21, score: 60 }
];

const passingStudents = getPassingStudents(students);
console.log(passingStudents);