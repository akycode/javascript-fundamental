const container = document.querySelector('.container')
const card = document.querySelector(".card")
// const cloneCard = card.appendChild(card.cloneNode())

// card.classList.add('clone');
// clone.style.margin = "10px";
// const ptag = document.querySelector('p').textContent
// console.log(ptag);

for (let i = 2; i<101; i++) {
const newcard = card.cloneNode()
  newcard.innerText = i
  container.appendChild(newcard)
}

