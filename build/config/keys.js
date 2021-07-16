"use strict";
const config = {
    server: process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};
module.exports = config;
