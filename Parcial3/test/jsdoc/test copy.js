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