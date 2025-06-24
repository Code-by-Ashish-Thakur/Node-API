const http = require('http');

http.createServer((req, res) => {

    //console.log(req);   // ye sari request ko print kr dega iska console or client ka console alg-2 hote hai

    // console.log(req.url);   // req.url se apko url mil jayega 

    //console.log(req.headers.host);   // isase jo apna header hota hai uska host name mil jayega 

    // console.log(req.method);         // isase method mil jayga ki kona method pass ho rha hai req ke and GET,POST etc


    // yaha par ab alg alg page par jayegnge..


    if (req.url == "/") {
        res.write("<h1>Home page </h1>");
    }
    else if (req.url == "/login") {
        res.write("<h1>Are ham to login par gaye hai</h1>");
    }
    else {
        res.write("<h1> sit yrrr other page par a gaye</h1>")
    }

    res.end();

}).listen(5001);