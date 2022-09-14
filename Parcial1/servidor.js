
const http=require('http');

const servidor=http.createServer((req,res)=>{
    res.end('Servidor HTTP de NopdeJS responiendo');
});

servidor.listen(8080,(console.log('Servidor corriendo y escuchando en puerto 8080'))); //CHECAR SI ES EL 8080

//SERVIDOR HTTPS Y DE DIFERENTES PUERTOS (2) 
//DEBER DESCARGAR NPM INIT-Y, NPM; express CARPETA, INSTALL EXPRESS