// const obj{
//     name: "Anish",
//     profession: "student",
// };
// console.log(obj.clas?obj.name);


const personDetail ={
    basic : {
        name : "Anish",
        profession :"student",
    }
};
// console.log(personDetail.basic.name);
console.log(personDetail.basic?.work || personDetail.basic.profession);
// console.log(personDetail.work.name)
// console.log(personDetail.work.name)
// console.log(personDetail.work.name?)
console.log(personDetail.basic.name)


