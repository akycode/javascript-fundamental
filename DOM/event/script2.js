const input = document.querySelector('#username');
const paragraph = document.querySelector('p');

// const button = document.querySelector('#btn')
// input.addEventListener('click', ()=>{
//     console.log('username is :')
// })


// input.addEventListener('input', (e)=>{
//     console.log(e.target.value)
//     paragraph.innerText = e.target.value
// })
input.addEventListener('focus', (e)=>{
    console.log(e.target.value)
    paragraph.innerText = e.target.value
})




// input.addEventListener('click ', (e)=>{
//     console.log('username is :', e.target.value)
// })