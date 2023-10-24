// crear conexion con la base de datos

/**
 * 1- importar dotenv   OK
 * 2- importar mysql12  OK
 * 3- host, user, password y name de la base de datos de .env  OK
 * 4- crear un pool     OK
 * 5- exportar pool.promis()   OK
 */

require("dotenv").config()
const mysql = require("mysql2")


const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME


const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})


module.exports = pool.promise();

