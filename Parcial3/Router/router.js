const express = require('express')
const cors = require('cors')
const {query, json} = require('express')
let json2xls=require('json2xls')

const ruta_empleado=require('../docrouter/rutas/ruta_empleado')

const app = express()
app.use(express.text())
app.use(express.json())
app.use(cors({origin:"*"}))


app.use('/empleado',ruta_empleado.router)



app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})