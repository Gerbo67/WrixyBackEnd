"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
// require
const config = require('../config/keys');
const sql = require('mssql');
const connection = new sql.ConnectionPool(config);
const pool = connection.connect();
exports.Admin = { pool, connection, sql };
