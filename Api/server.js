const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const {tomaPremio,tamano,getlistadepremios,agregaPremio,quitaPremio,actualizaPremio} = require('./modulo.js')
const math = require('math')
const cors = require("cors");
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


app.use(cors({origin:"*"}))
app.use(express.text())
app.use(express.json())
app.use(express.static('css'))
app.use(express.static('templates'))
// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
        title: 'API GASHAPON 19100254',
        version: '1.0.0',
      },
    server: [
      {url: "https://OrnateBitesizedCore.revis8466.repl.co"}
    ],
  },
  apis: [`${path.join(__dirname,"/server.js")}`]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));
/**
* @swagger
* /premio:
*   get:
*     description: Realizado para consultar un premio al azar de la base de datos.
*     responses:
*       200:
*         description: Se mostrara un premio o producto dados de alta.
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
 *    description: Consulta toda la base de datos completa de premios.
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
 *    description: Consulta para poder agregar un producto o premio mas a la base de datos.
 *    responses:
 *      200:
 *        description: Publicado exitoso.
 *        content:
 *            application/json:
 *              schema:
 *                  example: {"nombre":"zoro","descripcion":"zoro todo chikito todo ciego","urlpremio":"https://m.media-amazon.com/images/I/41TLriknCBL.jpg"}
 */
app.post('/agregaPremio', async function (req, res) {
  premio = await agregaPremio(req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(premio)
})

/**
 * @swagger
 * /eliminar:
 *  delete:
 *    description: Consulta para eliminar el producto o premio con el idproducto especificado.
 *    responses:
 *      200:
 *        description: PRODUCTO eliminado.
 *        content:
 *            application/json:
 *              schema:
 *                  example: {"idproducto":14}
 */
app.delete('/eliminar', async function (req,res) {
  borrado = await quitaPremio(req.body.idproducto)
  res.send(borrado)
})

/**
 * @swagger
 * /editar:
 *  patch:
 *    description: Consulta para actualizar o editar algun dato de un producto especificado con su idproducto.
 *    responses:
 *      200:
 *        description: Producto Actualizado.
 *        content:
 *            application/json:
 *              schema:
 *                  example: {"idproducto":9,"nombre":"luffy cabezon mini","descripcion":"luffy pero cabezon bonito","urlpremio":"https://cf.shopee.com.mx/file/f5d79fc18bd306f3b7d415c44972b6e8"}
 */
app.patch('/editar', async function (req, res) {
  editado = await actualizaPremio(req.body.idproducto,req.body.nombre,req.body.descripcion,req.body.urlpremio)
  res.send(editado)
})

// app.listen(port)
app.listen(8085, () =>{
  console.log('Servidor express escuchando en pto 8085')
})