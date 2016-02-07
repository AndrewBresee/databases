var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//server/db/index.js uses the mysql npm module to connect to the database server running on your computer
//We want it to connect to the mySQL database we have running
connection = mysql.createConnection({
  user: 'root',
  password: '1234',
  database: 'chat'
});

connection.connect();

exports = connection;