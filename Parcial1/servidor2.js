
let http=require('http');

let servidor=http.createServer(function (req,res){
    res.write('Servidor HTTP ccconttestando !!!');
    res.end();
})

servidor.listen(8081,()=>{console.log('Servidor corriendo y escuchando en puerto 8080')});