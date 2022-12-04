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

/**
* @swagger
* /premio:
*   get:
*     description: Realizado para consultar un premio al azar
*     responses:
*       200:
*         description: Permite consultar y traer todos sus datos de un premio o producto al azar.
*/

app.get('/premio',async function(req, res) {
  let tam = await tamano()
  console.log(tam[0].idproducto)
  let numPremio = math.floor(math.random()*tam[0].idproducto)+1
  console.log(numPremio)
  let premio = await tomaPremio(numPremio) 
  res.json(premio[0])
});

/**
 * @swagger
 * /listadepremios:
 *  get:
 *    descripcion: Consulta toda la base de datos completa de premios.
 *    responses:
 *      200:
 *        description: Se mostrara todos los elementos de la base de datos.
 */
app.get('/listadepremios',async function(req, res){
  premios = await getlistadepremios()
  res.json(premios)
})

/**
 * @swagger
 * /agregaPremio:
 *  post:
 *    descripcion: Consulta para poder agregar un producto o premio mas a la base de datos.
 *    responses:
 *      200:  Publicado exitoso
 *        description: Se agregara un premio con los datos especificados en el body.
 */
app.post('/agregaPremio', async function (req, res) {
  premio = await agregaPremio(req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(premio)
})

/**
 * @swagger
 * /eliminar:
 * delete:
 *    descripcion: Consulta para eliminar el producto o premio con el idproducto especificado.
 *    responses:
 *      200:  PRODUCTO eliminado.
 *        description: Se eliminara el premio o producto de la base de datos.
 */
app.delete('/eliminar', async function (req,res) {
  borrado = await quitaPremio(req.body.idproducto)
  res.send(borrado)
})

/**
 * @swagger
 * /editar:
 * patch:
 *    descripcion: Consulta para actualizar o editar algun dato de un producto especificado con su idproducto.
 *    responses:
 *      200:  Producto Actualizado.
 *        description: Se actualizara el registro con la nueva implementacion o cambio de datos.
 */
app.patch('/editar', async function (req, res) {
  editado = await actualizaPremio(req.body.idproducto,req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(editado)
})

app.listen(port)