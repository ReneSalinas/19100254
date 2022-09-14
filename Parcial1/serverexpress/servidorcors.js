const express = requiere('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin:"http://localhost"}))

app.get('/', (req, res) => {
    res.send('Servidor Express contestando a get puerto 8082')
})

app.post('/', (req, res) => {
    res.send('Servidor Express contestando a post puerto 8082')
})

app.listen('/', (req, res) => {
    res.send('Servidor Express escuchando a post puerto 8082')
})