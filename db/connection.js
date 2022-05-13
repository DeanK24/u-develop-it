const mysql = require('mysql2');
// connect to a database
// Connect to database
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PASS,
      database: "election",
    },
    console.log("Connected to the election database.")
  );

module.exports = db;