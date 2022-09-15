const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin:"http://127.0.0.1:5500"}))

app.get('/', (req, res) => {
    res.send('Servidor Express contestando a get puerto 8082')
})

app.post('/', (req, res) => {
    res.send('Servidor Express contestando a post puerto 8082')
})

app.listen(8082, () =>{
    console.log('Servidor express escuchando en pto 8082')
})