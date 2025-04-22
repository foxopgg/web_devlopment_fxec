// Prompt the user to enter a number
const number = parseInt(prompt("Enter a number to generate its multiplication table:"));

// Check if the input is a valid number
if (!isNaN(number)) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log("Please enter a valid number.");
}