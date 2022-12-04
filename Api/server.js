const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const {tomaPremio,tamano,getlistadepremios,agregaPremio,quitaPremio,actualizaPremio} = require('./modulo.js')
const math = require('math')
const cors = require("cors")

app.use(cors({origin:"*"}))
app.use(express.text())
app.use(express.json())
app.use(express.static('css'))
app.use(express.static('templates'))
// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get('/premio',async function(req, res) {
  let tam = await tamano()
  console.log(tam[0].idproducto)
  let numPremio = math.floor(math.random()*tam[0].idproducto)+1
  console.log(numPremio)
  let premio = await tomaPremio(numPremio) 
  res.json(premio[0])
});


app.get('/listadepremios',async function(req, res){
  premios = await getlistadepremios()
  res.json(premios)
})

app.post('/agregaPremio', async function (req, res) {
  premio = await agregaPremio(req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(premio)
})

app.delete('/eliminar', async function (req,res) {
  borrado = await quitaPremio(req.body.idproducto)
  res.send(borrado)
})

app.patch('/editar', async function (req, res) {
  editado = await actualizaPremio(req.body.idproducto,req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(editado)
})

app.listen(port)