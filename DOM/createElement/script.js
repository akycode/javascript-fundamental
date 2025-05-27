// by clone method
// const container = document.querySelector(".container")
// const img = document.querySelector('img')

// for(i = 1; i<90 ; i++){
//     const newimg = img.cloneNode()
//      newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newimg)
//     // img.append(url)
// }

const container = document.querySelector(".container")
const element = document.createElement('p') // create element se sirf html element crate hoga memery me
container.append(element) // append se html document me jayaga jo web page pr dekhega agar usme content kuch dale toh
// yaha pr element pura jayaga tab jab elemnt agar store rahega variable me , direct tag name use karne se tag name show karega element nhi
element.innerText = 'Pokemon'
element.id = 'intro'
// element.classList.add('new-class')


// by crateElement method
for (let i = 0; i < 200; i++) {
const img = document.createElement('img')
container.append(img)
img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
}



// wrong method
// element.append(element.src)
// for(i = 1; i<90 ; i++){
//     const newimg = img1.cloneNode()
//      newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newimg)
//     // img.append(url)
// } 