var pg = require('pg')
var j2x = require('json2xls')
var fs = require('fs')

const conString = {
  user: 'postgres',
  host: 'localhost',
  database: 'basechida',
  password: 'admin',
  port: '5432'
}

var pgClient = new pg.Client(conString);

pgClient.connect()
pgClient.query('SELECT * FROM empleado')

  .then(response => {
    xls = JSON.stringify(response.rows)
    console.log(xls)

    fs.writeFileSync(`${__dirname}/excel/dat.xlsx`, j2x([
    {"idempleado":1,"nombre":"Rene","apellido":"Salinas"},
    {"idempleado":2,"nombre":"Luis","apellido":"Saavedra"},
    {"idempleado":3,"nombre":"Martin","apellido":"Sanabia"},
    {"idempleado":6,"nombre":"Josue","apellido":"Espinoza"},
    {"idempleado":5,"nombre":"Lesly","apellido":"Rios"},
    {"idempleado":7,"nombre":"Alejandra","apellido":"Siller"},
    {"idempleado":4,"nombre":"Jordan","apellido":"Diaz"}]), 
    'binary')

    pgClient.end()
  })
  .catch(err => {
    console.log(err)
    pgClient.end()
  })