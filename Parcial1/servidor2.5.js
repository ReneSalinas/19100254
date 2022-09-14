
const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send('Servidor express responiendo')
})

app.listen(8081,()=>{console.log('Servidor corriendo y escuchando en puerto 8080')})