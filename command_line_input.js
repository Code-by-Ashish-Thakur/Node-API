// const arg = process.argv;  // isase jb ham commnad line chalaye or file ke bad jo pass kaarenge wo terminal me dikheag


// //console.log("-----------", arg); // ye pura aray jo banega usko print kreg

// //console.log(".....", arg[2]);     //

// console.log(".....", arg[0]);


// use of above method koi port number change krne ki nedd ho dyanmicaly tb krte hai


const http = require('http');

const arg = process.argv;

const PORT = arg[2];
console.log(arg[2]);// ye ek aray hota hai 0 index par address hota 1 index par .exe file ka path  
//  2nd index par ho jo input me doge wo 
http.createServer((req, res) => {
    res.write("Take the input port from cmd ");
    res.end();
}).listen(PORT);

