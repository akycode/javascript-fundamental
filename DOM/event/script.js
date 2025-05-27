//first method  direct html me onclick method element ke tag me pas kardo function
// function onBlick(){
//     console.log('listen again');
// }
// // 2nd method
// card.onclick = onBlick

//3rd method and the best one isme me ek sath multiple fuction pass kar sakte hai
// card.addEventListener('click',onBlick)
// card.addEventListener('click',function(){console.log('ek or fuction');})


const container = document.querySelector(".container")
const card = document.querySelector('.card')
 


// card.addEventListener('click',function () {
//     const newcard = card.cloneNode()
// container.append(newcard)
// })
card.addEventListener('click',function() {
const newcard = document.createElement('div')
newcard.classList.add('card')
container.append(newcard)
})