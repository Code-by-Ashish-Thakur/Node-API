// synchronous way

// console.log("ashish bhai 1");
// console.log("ashish bhai 2");
// console.log("ashish bhai 3");


// async way -> async ham log using set Timeout or promis bagera a use krke krte hai 


// console.log("ashish bhai 1");

// setTimeout(() => {
//     console.log("ashish bhai 2");
// }, 2200)

// console.log("ashish bhai 3");

const fs = require('fs');


// fs.readFile("text/ashish thakur.txt", "utf-8", (err, data) => {
//     if(err){
//         return false;
//     }
//     console.log(data);
// });
// console.log("script ended");



// ye synchronous way hai kaam krne kaa

const data = fs.readFileSync("text/ashish thakur.txt", "utf-8",)
console.log(data);

console.log("script ended");