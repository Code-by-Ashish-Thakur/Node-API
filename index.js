
const http = require('http');

const userData = [
    {
        name: "ashish",
        age: 23,
        emaai: "ashish@patel.com",
        Role: "SDE",
    },
    {
        name: "shivam",
        age: 23,
        emaai: "shivasing@gmail.com",
        Role: "web D",
    },
    {
        name: "vish",
        age: 23,
        emaai: "vish@gmail.com",
        Role: "Backend",
    },
]
http.createServer((req, res) => {

    res.write(JSON.stringify(userData));
    res.end();
}).listen(8000);