const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({
    user: 'ddg',
    password: 'ddg',
    host: 'localhost',
    port: 5432,
    database: 'tododb'
});

module.exports = pool;