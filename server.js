
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ashish@2002",
    database: "node_api_2025"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected succesfully ");
})



