// const users = [
//     { name: "Alice", online: true },
//     { name: "Bob",   online: false },
//     { name: "Carol", online: true }
//   ];
  
//   // Example: log each user’s status, and update a simple DOM list
//   users.forEach(user => {
//     // 1) Side‐effect: console logging
//     console.log(`${user.name} is ${user.online ? "online" : "offline"}`);
  
//     // // 2) Side‐effect: imagine we have a <ul id="user-list">
//     // const ul = document.getElementById("user-list");
//     // const li = document.createElement("li");
//     // li.textContent = `${user.name} (${user.online ? "🟢" : "🔴"})`;
//     // ul.appendChild(li);
//   });
  

//   const temperaturesC = [0, 10, 20, 30];

// // Convert each Celsius value to Fahrenheit
// const temperaturesF = temperaturesC.map(c => (c * 9) / 5 + 32);

// console.log(temperaturesF);
// // [32, 50, 68, 86]

// Sparse Arrays
// const a = [];
// a[1] = 42;
// // const callback1 = a[1] = 42;
// // console.log(callback1);

// const callback2 = a.forEach((e)=> e);  // only index 1 runs
// console.log(callback2); 

// const callback3 = a.map((e)=> e)       // output has a hole at index 0
// console.log(callback3);

// const callback4 = a.filter((e)=> e)    // acts only on index 1
// console.log(callback4);

// const callback5 = a.reduce((e)=> e)    // only index 1 is processed
// console.log(callback5);

const orders = [
    { customer: "Alice", total:  50 },
    { customer: "Bob",   total: 100 },
    { customer: "Alice", total:  75 },
    { customer: "Bob",   total:  25 }
  ];
  
  // 4a) Sum of all order totals
  const totalRevenue = orders.reduce((sum, order) =>sum + order.total,0);
  console.log(totalRevenue); // 250
  
//   // 4b) Group totals by customer
//   const revenueByCustomer = orders.reduce((acc, order) => {
//     acc[order.customer] = (acc[order.customer] || 0) + order.total;
//     return acc;
//   }, {});
//   console.log(revenueByCustomer);
//   // { Alice: 125, Bob: 125 }
  
//   // 4c) Flatten a nested array of items
//   const nested = [[1, 2], [3, 4], [5]];
//   const flat = nested.reduce((all, sub) => all.concat(sub), []);
//   console.log(flat); // [1, 2, 3, 4, 5]
  



