const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')

const app = express()

app.use(cors({ origin:"http://127.0.0.1:5500"}))

app.use(express.text())
app.use(express.json())

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get puerto 8082')
    res.sendFile('./static/index.html',{root:__dirname})
})              

app.post('/', (req, res) => {
    // res.send('Servidor Express contestando a post puerto 8082')
    res.json({usuario:"RENE"})
    res.send('HOLAAAAAAAAAAAAAAAAAAAAAAAAA')
})

app.post('/texto', (req, res) => {
    console.log(req.body)
    let may = req.body.toUpperCase()
    let sinesp = req.body.trim()
    let longi = req.body.length
    res.json({mayusculas: may,
    sinespacios: sinesp,
    longitud: longi })
})

app.post('/json', (req,res) =>{
    console.log(req.body.nombre)
    let cadena = "hola " +req.body.nombre+" " +req.body.apellido+" como estas?"
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadena',(req, res) =>{
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma',(req, res) =>{
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`La suma es `+suma)
})

app.use(function (req,res){
    res.status(404).sendFile("/static/404.html",{root:__dirname})
})

app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})