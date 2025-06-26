const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const { log } = require('console');
http.createServer((req, res) => {

    fs.readFile('html/web.html', 'utf-8', (err, data) => {   // utf-8 yaha par charcter ka type hai html ke andr

        if (err) {
            res.writeHead(500, { "content-type": "text/plain" })
            res.write("Error a gaya hai yrr", err);
            res.end();
        }
        res.writeHead(201, { "content-type": "text/html" })    // jb hm html ka content send krta hai tb header jaruri hota hai 

        if (req.url == '/') {
            res.write(data);
        }
        else if (req.url == '/submit') {
            let dataBody = [];

            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readData = queryString.parse(rawData);
                console.log(readData);

                let dataString = "My name is " + readData.name + " and my email is " + readData.email;

                fs.writeFileSync("text/" + readData.name + ".txt", dataString);
                console.log("file created successfully");
            });
            res.write("<h1>Data submit ho gaya hai </h1>")
        }

        res.end();
    });


}).listen(3200);