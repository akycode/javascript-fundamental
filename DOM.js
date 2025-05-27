// Part of the Web Platform, provided by browsers (and other hosts like Node+jsdom)
// Browsers implement the DOM API on top of their rendering engines.
// You get global objects like window, document, Element, and methods like addEventListener because the browser injected them into your JS environment.


// // const menupulation =  document.body.children[0].innerHTML = 'this is me'
// const menupulation =  document.body.children[0]
// // console.log(menupulation);
// // const seleccting = document.querySelector('#id').innerHTML = "kya hal hai"
// const seleccting = document.querySelector('#id')
// // console.log(seleccting);
// seleccting.style.color = 'red'
// menupulation.style.color = 'red'

const list = document.querySelectorAll('#id')
for (const lists of list) {
    lists.style.color = 'yellow'
    const attr = lists.setAttribute('id',"newidds")

    console.log(attr);
    console.log(lists);
}
const getattr = document.querySelector('img')
const chahiya = getattr.getAttribute('alt')
// console.log(chahiya);


const img = document.querySelector('img')
img.style.height = "50%"
img.style.maxWidth = "50%"

img.classList.add("class-list")
img.classList.toggle('blue')
console.log(img.children);
console.log(img.childNodes);
console.log(img.firstElementChild);
console.dir(img)