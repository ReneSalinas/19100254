const express = require('express')
let pg = require('pg')


const app = express()

app.use(express.text())
app.use(express.json())


const conString = {
    user: 'postgres',
    host: 'localhost',
    database: 'basechida',
    password: 'admin',
    port: '5432'
  }
  
  var pgClient = new pg.Client(conString);
  
  



app.get('/',function(req,res) {
    pgClient.connect()
    pgClient.query('SELECT * FROM empleado WHERE id =' + req.body)
    .then(response => {
        console.log(response.rows)
        res.send(response.rows)
    })
    
})

app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})