// // while loop 

// let num = 0;
// while (num<10) {
//     console.log(num)
//     ++num
// }
// console.log("program ended")

// // while loop for array

// let arr  = ["shelby","rangnar","Demon","Senagami","clasico"]
// let i = 0
// while (i<arr.length) {
//  console.log(`${i+1}.${arr[i]}`);
// i++
// }
// console.log("program ended")

// let array  = ["shelby","rangnar","Demon","Senagami","clasico"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// // even number between 1 to 50

// for (let i = 1; i<=50; i++) {
//     const element = i%2==0;
//     // console.log(element);
//     if (element) {
//         console.log(i);
//     }
// }

// // odd number 

// for (let i = 0; i<=25; i++) {
//     if ( i%2==1) {
//         console.log(i);
//     }
// }


// // do while loop
// let num1 = 0
// do {
//     console.log(num1);
//     num1++
// } while (num1<10);


// question find prime number between 1 to 50 

//WRONG METHOD
// divisible 1 and itself eg: 1,2,3,5,7,11
// for (let prime = 0; prime < 50; prime++) {
// if (prime%2!=0 && prime%3!=0 && prime%7!=0 && prime%5!=0) {
//     console.log(prime);
// };
// } // 1,11,13,17 etc


// for (let num = 2; num <= 10; num++) {
//     // 1. We’ll test every integer “num” from 2 up to 50.
//     //    (1 is not prime, so we start at 2.)
    
//     let isPrime = true;
//     // 2. Assume “num” is prime to start with. We’ll try to prove it false.
  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       // 3. We only need to test divisors i from 2 up to √num.
//       //    Why √num? If num = a·b and both a,b > √num, then a·b would
//       //    exceed num. So any non‑trivial factor must be ≤ √num.
  
//       if (num % i === 0) {
//         // 4. If num divides evenly by i, then num = i × (num/i),
//         //    so it has a non‑trivial factor → not prime.
  
//         isPrime = false;
//         // 5. Mark it composite…
  
//         break;
//         // 6. …and bail out of the inner loop immediately (no need to keep checking).
//       }
//     }
  
//     if (isPrime) {
//       // 7. If our flag was never flipped to false, num has no divisors
//       //    between 2 and √num, so it’s prime.
//       console.log(num);
//     }
//   }
  
//another simple method 


for (let p = 2; p<=50 ; p++) {
    let isprime = true;
    
    for(let i = 2; i * i <= p; i++){
    if (p%i ===0) {
    isprime = false;
    // break;
        } 
         
    }
  if (isprime) {
        console.log(p);
    }
}
// In the above method i just use 2 for loop which is nested ,2 if statement , i * i condition is prelacement of math.sqrt() 
// the most important line is p%i === 0 ,this condition gives me prime no from p which is natural no betwwn 2 to 50 ,% this operator is basically use as remainder 
