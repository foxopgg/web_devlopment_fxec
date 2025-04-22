// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = 0;

// Prompt the user to guess the number
while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Guess a number between 1 and 10: "), 10);

    if (userGuess < randomNumber) {
        alert("Too low! Try again.");
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
    } else if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else {
        alert("Invalid input. Please enter a number between 1 and 10.");
    }
}