// Encapsulation - DATA HIDDING 
// Abstration 
// Inheritance
// Polymorphism 

// const user = {
//     firstName : "Anish",
//     lastName : "Kumar" , 
//     age : 22,
//     getAgeyear:function(){
//     return new Date().getfullYear()-user.age 
// } 
// } 

// function createuser(firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear : createuser.commonMethod.getBirthYear
//     }
//     return user
// }
// createuser.commonMethod = {
    // getBirthYear(){
    //     return new Date().getfullYear()-user.age
    // },
// }

// user1 = createuser('Anish','krr',22)
// user2 = createuser('subhas','ydv',20)

// console.log(user1);
// console.log(user2);

// constructor properties - available for every function
// new keyword - by defult ek object return karta hai 

// function sayHi (){
//     console.log(this);
// }

function createuser(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    }
createuser.prototype.getBirthYear = function(){
        return new Date().getFullYear() - this.age
    }

user1 = new createuser('Anish','krr',22)
user2 = new createuser('subhas','ydv',20)  