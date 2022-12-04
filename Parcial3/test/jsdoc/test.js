// let chai = require('chai');
// let chaiHttp = require('chai-http');
// const expect   = require('chai').expect;
// chai.use(chaiHttp);
// const url= 'http://localhost:8085';
// // Encapsular en test dentro de la funcion describe() Y describirmos el test
// describe('Inserta un empleado: ',()=>{
//     it('deberia insertar un empleado', (done) => {// En la funcion it() lo que deberia hacer
//         chai.request(url)
//             .post('/')
//             .send({ nombre:"Enrique", apellido:"Pena" })
//             .end( function(err,res){
//                 expect(res).to.have.status(200);
//                 expect(res.text).to.be.a('string');
//                 done();
//             })
//         ;}
//     );
// }); 

// describe('Obtiene empleados: ',()=>{
//     it('Deberia obtener todos los empleados', (done) => {
//         chai.request(url)
//                 .get('/')
//                 .send()
//                 .end( function(err,res){
//                     expect(res).to.have.status(200);
//                     expect(res).to.be.json;
//                     done();
//                 });
//     });
// });

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);
const url= 'https://OrnateBitesizedCore.revis8466.repl.co';

describe('Inserta un premio: ',()=>{
    it('deberia insertar un premio', (done) => {
        chai.request(url)
            .post('/agregaPremio')
            .send({ nombre:"Enrique", descripcion:"Pena", urlpremio:"https://http2.mlstatic.com/D_NQ_NP_609397-MLM51909130174_102022-V.jpg" })
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res.text).to.be.a('string');
                done();
            })
        ;}
    );
}); 

describe('Obtiene premios: ',()=>{
    it('Deberia obtener todos los premios', (done) => {
        chai.request(url)
                .get('/listadepremios')
                .send()
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    done();
                });
    });
});