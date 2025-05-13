// function Defination and function Declaration
// function intro(username,profession){         // (username,profession) :- Parameters : variable 
// console.log(`Hi , My name is ${username} and i'm a ${profession}`);
// }       // function declation
// intro("Anish","student");    // function calling



// // function Defination and function Expression
// const def = function (x) {          // anonymous function (jis fuction ka nam na ho) 
//     return x = 2+3;
//     console.log("ACODE");
// }
// console.log( def());
// // def(10)

//Immediately‑Invoked Function Expressions (IIFE)
(function () {
    console.log("IIFE");
}())

// settimeout and setintervel                    // this also a higher order function
setTimeout(() => { console.log("akycode"); },
    console.log('hello'), 1000); // hello /n akycode

// setInterval(()=> { console.log("run karta rahega ek fix time pr infinte loop ke liya");

// },1000)

//output of privous two function running together
// hello   // ya pahle run hua kuki ya syncronus code 
// IIF     // ya syncronous hai but ya fuction hai 
// akycode // asycronous code hai jo ek paricular time baad run kiya 

// higher Order function 

function hof(x) {
    // console.log(x);
    return x()         // ya imp concept hai iska explation niche kiya hu detail me
}

hof(function () {          // directly anonemus function pass kiya hu
    console.log(9);
})


const anonymous = hof(() => {  // yaha pr maine arrow function ko hof() me pass karke ek variable me store karke print kar diya
    // console.log("abc");
    return "abc"         // return isliya kiya hu taki undefined value na aaya sath me 
})
console.log(anonymous);

// x is just a parameter (variable).
// When you do hof(() => { console.log("abc") }), you are passing a function as an argument.
// Inside hof, the parameter x refers to that function.
// To execute that passed function, you do x().
// Yes, you can call a parameter like a function — if the parameter holds a function.

// closers
function parent() {
    console.log("object");
    x = 2;
    y = 22;
    function child() {
        console.log(x + y);
    }
    child()
}
parent()