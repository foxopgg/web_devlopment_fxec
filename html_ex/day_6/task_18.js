function getQuestionsWithAnswers(questions) {
    return questions.map(question => ({
        questionText: question.question,
        correctAnswer: question.correctAnswer
    }));
}

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    }
];

const result = getQuestionsWithAnswers(quizQuestions);
console.log(result);