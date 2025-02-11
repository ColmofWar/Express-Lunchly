/** Database for lunchly */

const { Client } = require("pg");
const dotenv = require("dotenv");
let DB_URI;

dotenv.config();


DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/lunchly`;


let client = new Client({ 
    connectionString: DB_URI,
});

client.connect();
module.exports = client;
