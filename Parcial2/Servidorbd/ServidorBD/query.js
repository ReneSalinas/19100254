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
