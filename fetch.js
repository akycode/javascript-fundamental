// fetch(...) starts a request.
// .then(...) waits for result.
// .catch(...) catches any error.

fetch('https://dummyjson.com/products').then((res)=>console.log(res))
// .then(res =>res.json)
// .then(console.log)


fetch('https://dummyjson.com/products/add',()=>{
    method : 'POST'
    body : json.stringify({
        title: 'BMW',
        catagory : 'car'
    }
    )
})
.then(res => res.json())
.then(console.log)
