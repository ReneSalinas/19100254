const express = require('express')
const cors = require('cors')
var router = express.Router()

const app = express()
let pg = require('pg')

app.use(cors({origin:"*"}))
app.use(express.text())
app.use(express.json())

/**
* @swagger
* /empleado:
*   get:
*     description: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/', async (req, res) => {
});


const conString = {
    user: 'postgres',
    host: 'localhost',
    database: 'basechida',
    password: 'admin',
    port: '5432'
  }
  
  var pgClient = new pg.Client(conString);
  pgClient.connect()  
  



router.get('/',function(req,res) {
    
    if(req.body.text!=undefined){
        
        pgClient.query('SELECT * FROM empleado WHERE id =' + req.body)
        .then(response => {
        console.log(response.rows)
        res.send(response.rows)
    })

    }
    else{
        
    pgClient.query('SELECT * FROM empleado')
        .then(response => {
        console.log(response.rows)
        res.send(response.rows)
         })
    }

    
})
// POST
router.post('/',function(req,res) {
    
    nombre = req.body.nombre
    apellido = req.body.apellido
    pgClient.query(`INSERT INTO empleado(nombre,apellido) VALUES ('${nombre}','${apellido}')`)
    .then(response => {
        res.send(response)
    })
    
})
// DELETE
router.delete('/',function(req,res) {
    
    let id = req.body.id
    pgClient.query(`DELETE FROM empleado WHERE id ='${id}'`)
    .then(response => {
        res.send(`Empleado eliminado`)
    })
    
})
// PUT PATCH
router.patch('/',function(req,res) {
    
    let id = req.body.id
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    pgClient.query(`UPDATE empleado SET nombre='${nombre}',apellido='${apellido}'  WHERE id='${id}'`)
    .then(response => {
        res.send(`Empleado actualizado`)
    })
    
})

// app.listen(8085, () =>{
//     console.log('Servidor express escuchando en pto 8085')
// })
module.exports.router=router