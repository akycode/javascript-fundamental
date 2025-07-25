const resBtn = document.querySelector('#Resolved')
const rejBtn = document.querySelector('#Rejected')

const p = new Promise((resolve, reject) => {
    resBtn.addEventListener('click', () => {
        resolve("promise resolved");
    });
    rejBtn.addEventListener('click', () => {
        reject("promise rejected");
    });
});

p.then((data)=>{ 
console.log(data);
})
p.catch((reject)=>{
 console.log(reject)})
 