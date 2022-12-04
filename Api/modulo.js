let postgres = require('postgres')

const sql = 
postgres('postgres://bjexnkfr:jSho5VXPH8ccdUNHk_GBeUCYXeRG-ril@tiny.db.elephantsql.com:5432/bjexnkfr',
{
  user: 'bjexnkfr',
  host: 'tiny.db.elephantsql.com',
  database: 'bjexnkfr',
  password: 'jSho5VXPH8ccdUNHk_GBeUCYXeRG-ril',
  port: '5432'
})

//GETALL
async function getlistadepremios(){
  const premio = await sql`SELECT * FROM producto`
  return premio
}

//GET
async function tomaPremio(idproducto){
  const premio = await sql`SELECT * FROM producto WHERE idproducto = ${idproducto}`
  return premio
}

//POST
async function agregaPremio(nombre,descripcion,url){
  console.log(nombre + " " + descripcion + " " + url)
  await sql`INSERT INTO producto(nombre,descripcion,urlpremio) VALUES (${nombre},${descripcion},${url})`
  return 'Publicado Exitoso'
}

// DELETE
async function quitaPremio(idproducto){
    id = idproducto
    const premio = await sql`DELETE FROM producto WHERE idproducto =${id}`
    return `PRODUCTO eliminado`
}
// PUT PATCH
async function actualizaPremio(idproducto,nombre,descripcion,urlpremio){
    const premio = await sql`UPDATE producto SET nombre=${nombre},descripcion=${descripcion},urlpremio=${urlpremio} WHERE idproducto=${idproducto}`
    return`Producto actualizado`
    
}

async function tamano(){
  const tamano = await sql`SELECT idproducto FROM producto ORDER BY idproducto DESC LIMIT 1`
  return tamano
}


module.exports.sql = sql
module.exports={ tomaPremio,tamano,agregaPremio,quitaPremio,actualizaPremio,getlistadepremios }