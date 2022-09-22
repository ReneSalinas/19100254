const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')

const app = express()

app.use(cors({ origin:"http://127.0.0.1:5500"}))

app.get('/', (req, res) => {
    //res.send('Servidor Express contestando a get puerto 8082')
    res.sendFile('./static/index.html',{root:__dirname})
})              

app.post('/', (req, res) => {
    // res.send('Servidor Express contestando a post puerto 8082')
    res.json({usuario:"RENE"})
    res.send('HOLAAAAAAAAAAAAAAAAAAAAAAAAA')
})

app.use(function (req,res){
    res.status(404).sendFile("/static/404.html",{root:__dirname})
})

app.listen(8085, () =>{
    console.log('Servidor express escuchando en pto 8085')
})