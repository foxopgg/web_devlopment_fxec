// db.js
const mysql = require('mysql2/promise');

// Create a pool of connections to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',          // Default MySQL user in XAMPP
  password: '',          // Default password is empty for XAMPP
  database: 'college_db', // Database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
