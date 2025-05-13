// Default parms , sperad Operator 
// Destructuring 
const arr = [1, 2, 3, 4, 5]
const arr2 = [11, 22, 33, 44, 55]
let combarr = [...arr, ...arr2, 100]

params = 0
for (let i = 0; i < combarr.length; i++) {
    params += combarr[i]

}
console.log(params);

function add(...nums) {
    console.log(nums);
}
add(2, 3, 4, 5, "ak") // [ 2, 3, 4, 5, 'ak' ] // result in the array


const num = [0, 2, 4, 6]
function rest(a, b, c, d, e, ...num) {
    console.log(num);
}


const colours = ['red', 'green', 'blue', 'white', 'black']

const [first , second] = colours
console.log(first,second);