//  Object Feature	Details
// Dynamic	Add, delete, update properties anytime
// Nesting	Objects inside objects
// JSON	Objects can be converted to JSON (JSON.stringify)
// Key types	Only string or symbol
// Property Attributes	Writable, Enumerable, Configurable (advanced topics)



// Concept	Explanation
// Object vs Array	Object = unordered (key-value), Array = ordered list (index-based)
// Shallow Copy	Copies top level only (e.g., Object.assign)
// Deep Copy	Copies deeply nested structures (needs custom logic or libraries like Lodash)
// Reference Type	Copying object variable copies address, not data itself

// // object to JSON
// let student = { name: "AK", grade: "A"};
// let json = JSON.stringify(student)

// console.log(json); // '{"name":"AK","grade":"A"}'

// // JSON to Object

// let parsed = JSON.parse(json)
// console.log(parsed)


// Feature	        Description         	    Example
// Dynamic	Can add/update/delete properties	user.age = 25
// Nested	Objects inside objects          	company.address.city
// JSON Support	Objects easily converted to JSON	JSON.stringify(obj)
// Keys	Always string or symbol	obj[true]        → obj["true"]
// Property Attributes Hidden settings on properties	Object.defineProperty()
// Freeze	Completely locks object	            Object.freeze(obj)
// Seal	Prevents adding/removing properties    	Object.seal(obj)

// ✅ Use freeze when you need read-only constants.
// ✅ Use seal when you want to update but avoid adding accidental new fields.
// ✅ Always validate or clone nested objects carefully (to avoid hidden mutations!).
// ✅ For complex keys (like object as key), prefer Map instead of raw object.


// object


// const obj1  = {
//     name : "ANISH",
//     professtion : "intern",
    
// }
// obj.defineProperty()



let obj = {};
Object.defineProperty(obj, "x", {
  value: 10,
  writable: false
});

obj.x = 20;  // ❌ won't change
console.log(obj.x); // 10

// //  If you have application-wide settings or constants — freeze them so they can't be modified accidentally.

const CONFIG = {
    appName: "MyApp",
    version: "1.0",
    debugMode: false
  };
  
  Object.freeze(CONFIG);
  
  // ❌ No one can change it
  CONFIG.version = "2.0";
  console.log(CONFIG.version); // "1.0"
  

//   Object.defineProperty()
//  ├── writable: true/false (change value)
//  ├── enumerable: true/false (show in loop)
//  └── configurable: true/false (delete/redefine)
 
// Object.freeze(obj) → Lock everything (shallow)
// deepFreeze(obj) → Lock everything (deep)


// const obj = {name: "ANISH"}
// obj.profession= "student"
// // obj ={grade : "A"}
// console.log(obj);


// // DIFFERENCE BETWEEN LET AND CONST

let obj1 = { name: "aky"}  
obj1 = {city: "ara"}
console.log(obj1);  // { name: 'ANISH', profession: 'student' } { city: 'ara' }

const obj2 = { name: "aky"}
 obj2 = {city: "ara"}
console.log(obj2); // TypeError:  Assignment to constant variable.

// defineProperty & getownpropertydescripter

const obj3 = {
    // name: "An",
    clg: "ch",
}
Object.defineProperty(obj3,"name",{
    work :"intern",
    value : "av",
    writable: true,
    enumerable : true,
    configurable: true,
    
})
obj3.name = "ontheblink"
// delete obj3.name

// console.log(obj3);
console.log(obj3.name)
// console.log(obj3.work)

let des = Object.getOwnPropertyDescriptor(obj3)
console.log(des)
