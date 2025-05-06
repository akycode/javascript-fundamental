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
// // arr1.length = 0 //it is used to remove all the elemnet of array
// // arr1.unshift()
// const newarr2 = arr1.shift()
// console.log(newarr2)
// console.log(arr1) // []


let DAYS = ["morning", "afternoon", "evening","night" ]
let MONTH = ["Jan", "fab", "march","April"]
let newArr = [];
const assign= Object.assign(newArr,DAYS,MONTH); // first update newarr by DAYS then replace with Months


// | Need                         | Method |

// | Keep original data intact    | `slice` (or spread/concat) |
// | Change the existing array    | `splice` |

let listOfName = ["shelby","rangnar","Demon","Senagami"]
const copy=listOfName.slice()
console.log(listOfName)
console.log(copy)

const removel = listOfName.splice(1 , 3)
console.log(removel)
console.log(listOfName)

