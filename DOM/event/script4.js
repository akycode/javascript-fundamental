const container = document.querySelector('.container')
const card = document.querySelector('.card')
const btn = document.querySelector('#btn')
let i = 2
btn.addEventListener('click',() => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    container.append(newCard)
    newCard.textContent = i++
})

container.addEventListener('click', (e)=>{
if (e.target !== container) {
    e.target.remove()
}
})