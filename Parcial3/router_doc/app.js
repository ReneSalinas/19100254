const express = require('express')
const cors = require('cors')
const path = require("path")
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API Empleados',
    version: '1.0.0',
    },
    servers:[
    {url: "http://localhost:8085"}
    ],
    },
    apis: [`${path.join(__dirname,"./rutas/ruta_empleado.js")}`],
    };

const ruta_empleado = require('./rutas/ruta_empleado')

const app = express()

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(express.text())
app.use(express.json())
app.use(cors({origin:"*"}))


app.use('/empleado',ruta_empleado.router)



app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})