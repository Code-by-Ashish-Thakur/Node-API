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














connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected succesfully ");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





