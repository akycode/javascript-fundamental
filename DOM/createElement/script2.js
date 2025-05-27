const container = document.querySelector(".container")


for (let i = 1; i <=100; i++) {
    const imgContain = document.createElement('div')
    imgContain.classList.add('img-contain')
    const allImage = document.createElement('img')
    allImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const para = document.createElement('p')
    para.innerText = i
    imgContain.append(allImage, para) 
    container.append(imgContain)
}

// container.remove() // use for removing element
// 2nd method
// for (let i = 1; i < 100; i++) {
//     const imgContain = document.createElement('div')
//     imgContain.classList.add('img-contain') 

//     const myHtml = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
//     />
//     <p>${i}</p>`

//     imgContain.innerHTML = myHtml 
//     container.append(imgContain)
// }




// another ways
// for (let i = 1; i <= 100; i++) {
//  const img = document.createElement('img')
//  container.append(img)
//  img.style.textAlign = "center"
//  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//  const pTag = document.createElement('p')
// container.append(pTag)
// pTag.textContent = i
// pTag.style.textAlign = "center"
// pTag.style.margin = 0
// }