// DESCARGAR CODE RUNNER, NODEJS, en una carpeta hacer un servidor express
const http=require('http');

const servidor=http.creatServer((req,res)=>{
    res.end('Servidor HTTP de NopdeJS responiendo');
});

servidor.listen(8080,(console.log('Servidor corriendo y escuchando en puerto 8080'))); //CHECAR SI ES EL 8080