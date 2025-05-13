
// String Methods
const string = " my_name_is_Anish ";
const indexing1 = string.indexOf(4) // this will give -1
const indexing2 = string.indexOf("s")
// console.log(string); //not change means it give new string

console.log(indexing1); //-1
console.log(indexing2); //10
// console.log(string); 

const include = string.includes("my")
console.log(include); // true ,  kuki my letter string me hai agar nhi hoha toh false dega
// console.log(string); 

const slicing = string.slice(2, 9)
console.log(slicing)        // y_name_
// console.log(string); 

console.log(string.repeat(2));  // 2 times, my_name_is_Anish 

console.log(string.trim());      //my_name_is_Anish
console.log(string.trimEnd());   // my_name_is_Anish
console.log(string.trimStart()); //my_name_is_Anish 

console.log(string.toUpperCase()); // MY_NAME_IS_ANISH

console.log(string.toLowerCase()); // my_name_is_anish


console.log(string[1]); // accesing the charecter of string


const str = '24'
const str1 = +str    // Unary Plus Operator
console.log(str1);
console.log(typeof str1);
console.log(typeof str);


