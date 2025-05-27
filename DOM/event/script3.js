// ⌨️ KEYBOARD EVENTS
// Fired when a user interacts with a keyboard.

// Event	Description
// keydown	When a key is pressed (repeats while holding)
// keyup	When a key is released
// keypress	[Deprecated] Use keydown instead


const keybord = document.querySelector('div')
// keybord.addEventListener('keypress',(e)=>{
//     // console.log(e.target.value);
//     console.log(e.key);
//     console.log(e.key.valueOf);

// })
keybord.addEventListener('keyup',(e)=>{
    console.log(e.key);
    console.log(e.code);

})