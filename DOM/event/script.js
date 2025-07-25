// Categories:
// - Mouse: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, mouseout, contextmenu.
// - Keyboard: keydown, keyup.
// - Pointer: pointerdown, pointerup, pointermove, pointerenter, pointerleave, pointerover, pointerout, pointercancel.
// - Form: submit, reset, input, change, focus, blur.
// - Window: load, DOMContentLoaded, resize, scroll, unload, beforeunload.
// - Touch: touchstart, touchmove, touchend, touchcancel.
// - Clipboard: copy, cut, paste.
// - Drag & Drop: dragstart, drag, dragenter, dragover, drop, dragend.

//first method  direct html me onclick method element ke tag me pas kardo function
// function onBlick(){
//     console.log('listen again');    
// }
// // 2nd method
// card.onclick = onBlick

//3rd method and the best one isme me ek sath multiple fuction pass kar sakte hai
// card.addEventListener('click',onBlick)
// card.addEventListener('click',function(){console.log('ek or fuction');})


// 🖱️ MOUSE EVENTS
// Mouse events are fired when a user interacts with a mouse (or similar device).
// Event	    Description
// click	    Fires when an element is clicked
// dblclick	    Fires when an element is double-clicked
// mousedown	Fires when a mouse button is pressed
// mouseup	    Fires when a mouse button is released
// mousemove	Fires when the mouse pointer moves
// mouseenter	Fires when the pointer enters the element (no bubbling)
// mouseleave	Fires when the pointer leaves the element (no bubbling)
// mouseover	Fires when pointer is moved onto an element or its children
// mouseout	    Fires when pointer leaves an element or its children
// contextmenu	Right-click on an element

const container = document.querySelector(".container")
const card = document.querySelector('.card')
 


// card.addEventListener('click',function () {
//     const newcard = card.cloneNode()    
// container.append(newcard)
// })

//click Event

let count = 1
card.addEventListener('click',function() {
const newcard = document.createElement('div')    
newcard.classList.add('card')
container.append(newcard)
newcard.textContent = count++
})

// Mouse Event

// card.addEventListener('mouseenter',function() {
// const newcard = document.createElement('div')    
// newcard.classList.add('card')
// container.append(newcard)
// newcard.textContent = count++
// })



// 👆 POINTER EVENTS (Mouse, Pen, Touch – All-in-One)
// These are modern and preferred for cross-device input.

// Event	        Description
// pointerdown	    When a pointer is pressed
// pointerup	    When a pointer is released
// pointermove	    When a pointer moves
// pointerenter	    Like mouseenter, but for all pointer types
// pointerleave	    Like mouseleave
// pointerover	    Like mouseover
// pointerout	    Like mouseout
// pointercancel	Cancelled (e.g. due to OS interruption)

//pointer Events

// card.addEventListener('touchstart',function() {
// const newcard = document.createElement('div')    
// newcard.classList.add('card')
// container.append(newcard)
// newcard.textContent = count++
// })


// EVENT SIMULATOR

// card.addEventListener('click',function() {
// const newcard = document.createElement('div')    
// newcard.classList.add('card')
// container.append(newcard)
// newcard.textContent = count++
// })
// const setintervel = setInterval(()=>{
//     if (count>100) {
//         clearInterval(setintervel)    
//     }
// card.click()
// },100)


