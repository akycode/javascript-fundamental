// Import readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate sum of numbers
function calculateSum(n) {
    if (n < 0) {
        return "Please enter a positive number";
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Ask user for inputfa
rl.question('Enter a positive integer: ', (input) => {
    // Convert input to number
    const number = parseInt(input);

    // Check if input is valid
    if (isNaN(number)) {
        console.log('Please enter a valid number');
    } else {
        // Calculate and display sum
        const result = calculateSum(number);
        console.log(`Sum of numbers from 1 to ${number} is: ${result}`);
    }

    // Close the readline interface
    rl.close();
}); 