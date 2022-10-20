const express = require('express')
let pg = require('pg')


const app = express()

app.use(express.text())
app.use(express.json())

pgClient.connect()
const conString = {
    user: 'postgres',
    host: 'localhost',
    database: 'basechida',
    password: 'admin',
    port: '5432'
  }
  
  var pgClient = new pg.Client(conString);
  
  



app.get('/',function(req,res) {
    
    pgClient.query('SELECT * FROM empleado WHERE id =' + req.body)
    .then(response => {
        console.log(response.rows)
        res.send(response.rows)
    })
    
})

// POST
app.post('/',function(req,res) {
    
    nombre = req.body.nombre
    apellido = req.body.apellido
    pgClient.query(`INSERT INTO empleado(nombre,apellido) VALUES ('${nombre}','${apellido}')`)
    .then(response => {
        res.send(response)
    })
    
})
// DELETE
app.delete('/',function(req,res) {
    
    let id = req.body.id
    pgClient.query(`DELETE FROM empleado WHERE id ='${id}'`)
    .then(response => {
        res.send(`Empleado eliminado`)
    })
    
})
// PUT PATCH
app.patch('/',function(req,res) {
    
    let id = req.body.id
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pgClient.query(`UPDATE empleado SET nombre='${nombre}',apellido='${apellido}'  WHERE id='${id}'`)
    .then(response => {
        res.send(`Empleado actualizado`)
    })
    
})

app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})