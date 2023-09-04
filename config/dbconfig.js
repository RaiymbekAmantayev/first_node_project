// db.js
const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node.js'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;

