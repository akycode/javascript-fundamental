// const  arr = ["apple", "banana","mango","guava"];
// console.log(arr.length);
// arr.push("grapes");
// arr.push("fruits");
// arr[4] = "watermelon";
// console.log(arr);
// arr.pop();
// console.log(arr)
// const num = new Array(1,2,3,4,5)
// console.log(num)
// // new Array.pop() // throw error


// Pair                                       | Difference                                |  When to pick which
// splice() vs. slice() | splice mutates; slice returns copy. | Use slice for immutability; splice for in-place edits.
// push/pop vs. shift/unshift | End vs. front; front ops are O(n). | Prefer ops at end for performance; avoid shift/unshift in hot code.
// map() vs. forEach() | map returns a new array; forEach returns undefined. | Use map when transforming, forEach for side-effects.
// filter() vs. reduce() | filter returns subset; reduce is more generic (can filter, map, sum). | Use filter for readability when only filtering.
// includes() vs. indexOf() | includes more readable; indexOf gives position. | Use includes for boolean tests.
// flatMap() vs. map().flat() | flatMap is one pass; map().flat() is two. | Use flatMap for perf and brevity.



// let arr1 = [1,2,3,4,5]
// // arr1.length = 0 //it is used to remove all the element of array
// // arr1.unshift()
// const newarr2 = arr1.shift()
// console.log(newarr2)
// console.log(arr1) // []


let DAYS = ["morning", "afternoon", "evening", "night"]
let MONTH = ["Jan", "fab", "march", "April"]
let newArr = [];
const assign = Object.assign(newArr, DAYS, MONTH); // first update newarr by DAYS then replace with Months


// | Need                         | Method |

// | Keep original data intact    | `slice` (or spread/concat) |
// | Change the existing array    | `splice` |

let listOfName = ["shelby", "rangnar", "Demon", "Senagami"]
const copy = listOfName.slice()
console.log(listOfName)
console.log(copy)

const removel = listOfName.splice(1, 3)
console.log(removel)
console.log(listOfName)


let str2 = "anish"
console.log(str2.split(""));  // [ 'a', 'n', 'i', 's', 'h' ]

let newstr = ['a', 'n', 'i', 's', 'h']
console.log(newstr.join(""));

// ============= Array Methods Examples =============

// 1. map() - Transforms each element and returns new array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('map example:', doubled); // [2, 4, 6, 8, 10]

// 2. filter() - Returns new array with elements that pass the test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('filter example:', evenNumbers); // [2, 4]

// 3. reduce() - Reduces array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('reduce example:', sum); // 15

// ============= Array Destructuring =============

// Basic destructuring
const [first, second, ...rest] = numbers;
console.log('destructuring:', { first, second, rest }); // { first: 1, second: 2, rest: [3, 4, 5] }

// ============= Spread Operator =============

// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('spread operator:', combined); // [1, 2, 3, 4, 5, 6]

// ============= Array Iteration =============

// for...of loop
console.log('for...of iteration:');
for (const num of numbers) {
    console.log(num);
}

// entries() method
console.log('entries() method:');
for (const [index, value] of numbers.entries()) {
    console.log(`Index ${index}: ${value}`);
}

// ============= Array Type Checking =============

// Array.isArray()
console.log('Array.isArray():', Array.isArray(numbers)); // true
console.log('Array.isArray():', Array.isArray('not an array')); // false

// ============= Array Methods for Searching =============

// find() - Returns first element that satisfies condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log('find example:', firstEven); // 2

// some() - Checks if at least one element satisfies condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log('some example:', hasEven); // true

// every() - Checks if all elements satisfy condition
const allPositive = numbers.every(num => num > 0);
console.log('every example:', allPositive); // true

// ============= Practice Questions =============

// Question 1: Find the sum of all even numbers in an array
const practiceArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvens = practiceArray1
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
console.log('Q1 - Sum of even numbers:', sumOfEvens); // 30

// Question 2: Double the odd numbers and square the even numbers
const practiceArray2 = [1, 2, 3, 4, 5];
const transformedArray = practiceArray2.map(num => 
    num % 2 === 0 ? num * num : num * 2
);
console.log('Q2 - Transformed array:', transformedArray); // [2, 4, 6, 16, 10]

// Question 3: Find the first number that is both greater than 5 and even
const practiceArray3 = [1, 3, 5, 7, 8, 9, 10];
const firstEvenGreaterThan5 = practiceArray3.find(num => num > 5 && num % 2 === 0);
console.log('Q3 - First even number > 5:', firstEvenGreaterThan5); // 8

// Question 4: Check if all numbers in array are positive and less than 10
const practiceArray4 = [1, 3, 5, 7, 9];
const isValid = practiceArray4.every(num => num > 0 && num < 10);
console.log('Q4 - Are all numbers valid:', isValid); // true

// Question 5: Create a new array with unique values from two arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const uniqueArray = [...new Set([...array1, ...array2])];
console.log('Q5 - Unique values:', uniqueArray); // [1, 2, 3, 4, 5, 6]

// Question 6: Find the average of numbers in an array
const practiceArray6 = [10, 20, 30, 40, 50];
const average = practiceArray6.reduce((sum, num) => sum + num, 0) / practiceArray6.length;
console.log('Q6 - Average:', average); // 30

// Question 7: Create an array of objects from two arrays
const names = ['John', 'Jane', 'Bob'];
const ages = [25, 30, 35];
const people = names.map((name, index) => ({
    name,
    age: ages[index]
}));
console.log('Q7 - Array of objects:', people);
// [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 35 }]

// Question 8: Find the longest word in an array of strings
const words = ['apple', 'banana', 'cherry', 'date'];
const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
);
console.log('Q8 - Longest word:', longestWord); // 'banana'

// Question 9: Group numbers by their remainder when divided by 3
const practiceArray9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const groupedByRemainder = practiceArray9.reduce((groups, num) => {
    const remainder = num % 3;
    groups[remainder] = groups[remainder] || [];
    groups[remainder].push(num);
    return groups;
}, {});
console.log('Q9 - Grouped by remainder:', groupedByRemainder);
// { 0: [3, 6, 9], 1: [1, 4, 7], 2: [2, 5, 8] }

// Question 10: Find the second largest number in an array
const practiceArray10 = [5, 2, 8, 1, 9, 3];
const secondLargest = [...new Set(practiceArray10)]
    .sort((a, b) => b - a)[1];
console.log('Q10 - Second largest:', secondLargest); // 8

// ============= Practice Questions (Solve These) =============

// Question 1: Find the sum of squares of all numbers in an array
const practiceArray11 = [1, 2, 3, 4, 5]
const squares = practiceArray11.map(num => num * num);
console.log('Squares:', squares); // Should show [1, 4, 9, 16, 25]
const sumofsquares = squares.reduce((sum, num) => sum + num, 0);
console.log('Sum of squares:', sumofsquares); // Should show 55

// Let's verify the calculation:
// 1² = 1
// 2² = 4
// 3² = 9
// 4² = 16
// 5² = 25
// Total = 1 + 4 + 9 + 16 + 25 = 55


// Question 2: Create a function that returns an array of unique words from an array of strings
// Input: ['apple', 'banana', 'apple', 'cherry', 'banana']
// Expected output: ['apple', 'banana', 'cherry']
const practiceArray12 = ['apple', 'banana', 'apple', 'cherry', 'banana']
const uniquewords = practiceArray12.filter((word,i,arr)=>arr.indexOf(word)===i)
console.log(uniquewords);

// Question 3: Find the most frequent number in an array
// Input: [1, 2, 2, 3, 2, 4, 5, 2]
// Expected output: 2
const practiceArray13 = [1, 2, 2, 3, 2, 4, 5, 2]
const mostfrequent = practiceArray13.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{});
console.log(mostfrequent);


// Question 4: Create a new array with numbers that are both even and divisible by 3
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
// Expected output: [6, 12]
const practiceArray14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
const evenanddiv = practiceArray14.filter((e)=>e%2===0 && e%3===0)
console.log(evenanddiv);

// Question 5: Convert an array of strings to an array of their lengths
// Input: ['apple', 'banana', 'cherry']
// Expected output: [5, 6, 6]
const practiceArray15 = ['apple', 'banana', 'cherry']   
const lengthofwords = practiceArray15.map((word)=>word.length)
console.log(lengthofwords);

// Question 6: Find the difference between the largest and smallest numbers in an array
// Input: [5, 2, 8, 1, 9, 3]
// Expected output: 8 (9 - 1)
const practiceArray16 = [5, 2, 8, 1, 9, 3];
const difference = Math.max(...practiceArray16) - Math.min(...practiceArray16);
console.log('Difference:', difference); // Should show 8

// Alternative solution using sort:
// const sorted = [...practiceArray16].sort((a, b) => a - b);
// const difference = sorted[sorted.length - 1] - sorted[0];
// console.log('Difference:', difference);

// Question 7: Create a new array with numbers that are palindromes
// Input: [121, 123, 454, 789, 999]
// Expected output: [121, 454, 999]
const practiceArray17 = [121, 123, 454, 789, 999]
const palindrome = practiceArray17.filter((num)=>{
    const str = num.toString();
    return str === str.split('').reverse().join('');
});
console.log(palindrome);

// Question 8: Find the sum of all numbers at even indices
// Input: [1, 2, 3, 4, 5, 6]
// Expected output: 9 (1 + 3 + 5)
const practiceArray18 = [1, 2, 3, 4, 5, 6]
const sumofevenindex = practiceArray18.filter((e,i)=>i%2===0).reduce((sum,num)=>sum+num,0)
console.log(sumofevenindex);

// Question 9: Create a new array with the first letter of each word capitalized
// Input: ['apple', 'banana', 'cherry']
// Expected output: ['Apple', 'Banana', 'Cherry']

// Method 1: Using charAt and slice (original method)
const practiceArray19 = ['apple', 'banana', 'cherry']
const capitalize1 = practiceArray19.map((word) => {
    const firstChar = word.charAt(0);
    const upperFirst = firstChar.toUpperCase();
    const restOfWord = word.slice(1);
    return upperFirst + restOfWord;
});
console.log('Method 1:', capitalize1);

// Method 2: Using replace() with regex
const capitalize2 = practiceArray19.map(word => 
    word.replace(/^./, firstChar => firstChar.toUpperCase())
);
console.log('Method 2:', capitalize2);

// Method 3: Using substring()
const capitalize3 = practiceArray19.map(word => 
    word[0].toUpperCase() + word.substring(1)
);
console.log('Method 3:', capitalize3);

// Method 4: Using split and join
const capitalize4 = practiceArray19.map(word => {
    const [first, ...rest] = word.split('');
    return [first.toUpperCase(), ...rest].join('');
});
console.log('Method 4:', capitalize4);

// Method 5: Using template literal
const capitalize5 = practiceArray19.map(word => 
    `${word[0].toUpperCase()}${word.slice(1)}`
);
console.log('Method 5:', capitalize5);

// Question 10: Find the product of all numbers in an array
// Input: [1, 2, 3, 4]
// Expected output: 24 (1 * 2 * 3 * 4)
const practiceArray20 = [1, 2, 3, 4]
const product = practiceArray20.reduce((prod,num)=>prod*num,1)
console.log(product);

// Question 11: Create a function that returns an array of numbers that are greater than the average of the array
// Input: [1, 2, 3, 4, 5]
// Expected output: [4, 5] (average is 3)


// Question 12: Find the longest sequence of consecutive numbers in an array
// Input: [1, 2, 3, 5, 6, 7, 8, 10]
// Expected output: [5, 6, 7, 8]

// Question 13: Create a new array with numbers that are perfect squares
// Input: [1, 2, 4, 5, 9, 16, 25]
// Expected output: [1, 4, 9, 16, 25]

// Question 14: Find the sum of all numbers that are divisible by both 3 and 5
// Input: [15, 30, 45, 20, 25]
// Expected output: 90 (15 + 30 + 45)

// Question 15: Create a function that returns an array of numbers that are prime
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output: [2, 3, 5, 7]

// Question 16: Find the number of occurrences of each element in an array
// Input: ['apple', 'banana', 'apple', 'cherry', 'banana']
// Expected output: { apple: 2, banana: 2, cherry: 1 }

// Question 17: Create a new array with numbers that are Fibonacci numbers
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output: [1, 2, 3, 5, 8]

// Question 18: Find the sum of all numbers that are not divisible by 3
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Expected output: 27 (1 + 2 + 4 + 5 + 7 + 8)

// Question 19: Create a function that returns an array of numbers that are Armstrong numbers
// Input: [1, 2, 3, 153, 370, 371]
// Expected output: [1, 2, 3, 153, 370, 371]

// Question 20: Find the sum of all numbers that are perfect cubes
// Input: [1, 8, 27, 64, 125, 100]
// Expected output: 225 (1 + 8 + 27 + 64 + 125)