// arguments

function abc() {
    const values = [...arguments]

    console.log(arguments);
// for (let index = 0; index < arguments.length; index++) {
    
const finalsum = values.reduce((acc,s)=> acc+s,0)
console.log(finalsum);
// }
};
 const result = abc(1,2,3,4)
 console.log(result);