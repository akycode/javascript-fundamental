// if statement

const username =prompt('plese Enter your Name') || 'Anish'
const userAge = prompt('plese Enter your age') || undefined
console.log(`name: ${username} and Age: ${userAge}`)


if (userAge>18 && userAge <= 25) {
    console.log('user is collage student')   
    
}
if (userAge>5 && userAge <= 18) {
    console.log('user is school student')   
    
}
console.log('Program Ended!')


// if else statement

const username1 =prompt('plese Enter your Name') || 'Anish'
const userAge1 = prompt('plese Enter your age') || undefined
console.log(`name: ${username1} and Age: ${userAge1}`)


if (userAge1>18 && userAge1 <= 25) {
    console.log(`${ username1} is collage student`)   
    
}
else if (userAge1>5 && userAge1 <= 18) {
    console.log(`${ username1} is school student`)   
    
}
console.log('Program Ended!')


//  Approach	Use Case	Time	Space	Pros	Cons
// if-else	Few conditions, range checks	O(n)	O(1)	Simple, logical comparison	Verbose with many conditions
// switch	Same variable, multiple values	O(1)	O(1)	Cleaner than if-else chain	Only works with values
// Lookup Object	Value to result mapping	O(1)	O(n)	Fast, clean	No logic or comparisons
// Function Map	Reusable logic per case 	O(1)	O(n)	Modular, scalable	Slightly more setup


// switch statement 
// debugger
let x = 2
switch (x) {
    case x= 1:
        console.log("x is equal to 1");
        break;
    case x=2:
        console.log("x is equal to 2");
        break;
    default:
        console.log("x is not equal to given Key value pair");
        break;
}

// Ternary Operator
// debugger
const profession = (5>3) ? "engineer" : null ;
console.log(profession)