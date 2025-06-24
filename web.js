const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile('html/web.html', 'utf-8', (err, data) => {   // utf-8 yaha par charcter ka type hai html ke andr

        if (err) {
            res.writeHead(500, { "content-type": "text/html" })
            res.write("Error a gaya hai yrr", err);
            res.end();
        }
        res.writeHead(200, { "content-type": "text/html" })    // jb hm html ka content send krta hai tb header jaruri hota hai 
        res.write(data);
        res.end();
    });


}).listen(3200);