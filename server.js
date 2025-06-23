const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require("bcrypt");
const cors = require('cors');

const PORT = 8001;

const app = express();
app.use(cors());
app.use(bodyParser.json());


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// now time to write the API 

// -> This api to send the data in mysql 


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    connection.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('❌ Error inserting:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json({ message: 'User registered successfully', id: result.insertId });
    });

});





connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected succesfully ");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





