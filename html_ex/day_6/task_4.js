function getPassingStudents(students) {
    return students
        .filter(student => student.score >= 50)
        .map(student => student.name);
}

const students = [
    { name: 'Ajmal', age: 18, score: 9 },
    { name: 'balaji', age: 18, score: 9 },
    { name: 'Dilan', age: 18, score: 9 },
    { name: 'thariyathu', age: 18, score: 9 }
];

const passingStudents = getPassingStudents(students);
console.log(passingStudents);