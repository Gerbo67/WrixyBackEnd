// require
const config = require('../config/keys');
const sql = require('mssql');

const connection = new sql.ConnectionPool(config)
const pool = connection.connect()

export const Admin = {pool, connection, sql}