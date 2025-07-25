const img = document.querySelector('img')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', ()=>{
        console.log(xhr);
        img.src = xhr.response.message
    })
    console.log(xhr);
    xhr.open('GET','https://dog.ceo/api/breeds/image/random')
    xhr.send()
}
)