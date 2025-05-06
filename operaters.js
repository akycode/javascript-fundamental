// logical operators

const userAge = 16
const isCollageStudent = (userAge>=16) && (userAge <=16)  // AND operator
console.log(isCollageStudent) // true
const isCollageStudent2 = (userAge>=16) && (userAge <16)
console.log(isCollageStudent2)
const clgStudent = isCollageStudent || isCollageStudent2  // OR operator
console.log(clgStudent) // true 

const andResult = "Hello" && " null"
const orREsult = "hello" || "null"
console.log(andResult)
console.log(orREsult)
console.log(andResult || orREsult)