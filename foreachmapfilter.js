// foreach() , map() ,filter(), reduce()
// some(), every()


// foreach() = it does not print in array it just cosole element as value(result)
// Exactly—that’s the key point. forEach is all about doing something with each element (side-effects),not building anything new.
// It Calls your callback once per element.
// Ignores whatever you return from the callback.
// Alway undefined itself. (without even return keyword)
// Leaves the original array unchanged (unless your callback manually mutates it).


// let arr = ["shelby", "rangnar", "Demon", "Senagami"];
// const arrmethod = arr.forEach(function (el) {
//     console.log(el);

// })
// console.log(arrmethod); // shelby rangnar Demon Senagami undefined                            





// let month = ["january", "february", "march", "april", "may"];

// const result = month.map((value, i, arr) => {
//     // console.log(arr.length);
//     // console.log(value);
//     console.log(i);
//     // console.log(i);
//     // return value
//     return value.toUpperCase
// })
// console.log(result);
// console.log(month);


// let month = ["january", "february", "march", "april", "May", "December"];

// const result = month.filter((value, i, arr) => {
//     // console.log(arr.length);
//     // console.log(value);
//     // console.log(i);
//     // return value
//     // console.log(value.length <= 5); // false ,false, true, true, true ...in new line
//     // return value.length >= 5      // here is acture worl of filter method which filters the array
//     // return value.includes('m') || value.includes('M') // [ 'march', 'May', 'December' ]
//     return value.toLowerCase().includes('m') // [ 'march', 'May', 'December' ] // different method for above case

// })
// console.log(result);//[ 'march', 'april', 'may' ]
// // console.log(month); //[ 'january', 'february', 'march', 'april', 'may' ]


// const student = [
//     {
//         name: 'ak',
//         age: 12,
//     },
//     {
//         name: 'pk',
//         age: 22,
//     },
//     {
//         name: 'vk',
//         age: 18,
//     },

//     {
//         name: 'sk',
//         age: 17,
//     },

// ]
// const filterstd = student.filter(
//     (e) => { return e.age >= 18 }
// )
// console.log(filterstd);


// Callback Requirements
// forEach: callback return is ignored — you can return early inside callback, but it doesn’t stop iteration.
// map/filter/reduce: must return a value of the correct type:
// map: return the transformed element
// filter: return true/false (keep/discard)
// reduce: return updated accumulator

const somemethod = ["a", "b", "c", "d", "e"]
const methodd = somemethod.some((str) => {
    return str})
console.log(methodd); //True

const somemethod2 = [2,3,4,5,6,6,66,77]
const methodd2 = somemethod.some((str) => {
    return 5<str})
console.log(methodd); //True  // ya check krega tab tak jab tak true na mil jaya phir uske baad true return kar dega