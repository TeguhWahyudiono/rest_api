const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',  // address of the server
    user: 'root',       // username
    password: '',       // password
    database: 'rest_api' // name of the database
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

module.exports = connection;    // export the connection so that we can use it in other files
