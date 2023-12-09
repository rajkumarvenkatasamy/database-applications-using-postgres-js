const postgres = require('postgres');

// const sql = postgres('postgres://username:password@localhost/database');

const sql = postgres('postgres://postgres:P@ssw0rd@localhost:5434/todo');

module.exports = sql;
