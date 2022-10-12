const express = require('express')
const cors = require('cors')
const cadenas = require('./cadenas')

const app = express()
const router = express.Router()

app.use(cors({origin: "http://127.0.0.1:5500"}))

app.use(express.text())
app.use(router)

router.router('/clientes')
    .all((req,resp,next)=>{console.log('Peticion a ruta de clientes')})
    .get((req,resp,next)=>{console.log('Peticion get a clientes');resp.send('regresando del get a clientes');})
    .put((req,resp,next)=>{console.log('Peticion put a clientes');resp.send('regresando del put a clientes');})