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


// debugger
// let obj = {};
// Object.defineProperty(obj, "x", {
//   value: 10,
//   writable: false
// });

// obj.x = 20;  // ❌ won't change
// console.log(obj.x); // 10

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
//  obj2 = {city: "ara"}
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

// ============= Object Methods and Prototypes =============
console.log('\n=== Object Methods and Prototypes ===');

// Object.create() - Creates new object with specified prototype
const personProto = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};
const person = Object.create(personProto);
person.name = "John";
console.log('Object.create example:', person.greet());

// ============= Getters and Setters =============
console.log('\n=== Getters and Setters ===');

const user = {
    _name: "John",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};
console.log('Getter example:', user.name);
user.name = "Jane";
console.log('After setter:', user.name);

// ============= Object Property Methods =============
console.log('\n=== Object Property Methods ===');

const obj = { a: 1, b: 2, c: 3 };
console.log('Object.keys:', Object.keys(obj));
console.log('Object.values:', Object.values(obj));
console.log('Object.entries:', Object.entries(obj));

// ============= Object Destructuring =============
console.log('\n=== Object Destructuring ===');

const employee = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};
const { name, age, address: { city } } = employee;
console.log('Destructuring:', { name, age, city });

// ============= Object Spread and Assign =============
console.log('\n=== Object Spread and Assign ===');

const spreadObj1 = { a: 1, b: 2 };
const spreadObj2 = { c: 3, d: 4 };
const merged = { ...spreadObj1, ...spreadObj2 };
console.log('Spread operator:', merged);

const assigned = Object.assign({}, spreadObj1, spreadObj2);
console.log('Object.assign:', assigned);

// ============= Object Iteration =============
console.log('\n=== Object Iteration ===');

console.log('for...in loop:');
for (const key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// ============= Object Methods =============
console.log('\n=== Object Methods ===');

const entries = [['name', 'John'], ['age', 30]];
const fromEntries = Object.fromEntries(entries);
console.log('Object.fromEntries:', fromEntries);

// ============= Object Comparison =============
console.log('\n=== Object Comparison ===');

console.log('Object.is:', Object.is(NaN, NaN)); // true
console.log('Object.is:', Object.is(0, -0)); // false

// ============= Deep Clone Example =============
console.log('\n=== Deep Clone Example ===');

const original = {
    name: "John",
    address: {
        city: "New York"
    }
};
const deepClone = JSON.parse(JSON.stringify(original));
console.log('Deep clone:', deepClone);

// ============= Object Property Descriptors =============
console.log('\n=== Object Property Descriptors ===');

const descriptorObj = {
    name: "John"
};

Object.defineProperty(descriptorObj, 'age', {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log('Property descriptor:', Object.getOwnPropertyDescriptor(descriptorObj, 'age'));

// ============= Object Prototype Methods =============
console.log('\n=== Object Prototype Methods ===');

const protoObj = {
    name: "John"
};

const childObj = Object.create(protoObj);
console.log('Prototype chain:', Object.getPrototypeOf(childObj) === protoObj);

// ============= Object Property Symbols =============
console.log('\n=== Object Property Symbols ===');

const sym = Symbol('description');
const symbolObj = {
    [sym]: "This is a symbol property"
};
console.log('Symbol properties:', Object.getOwnPropertySymbols(symbolObj));
