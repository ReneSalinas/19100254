var pg = require('pg');
var conString = "postgres://postgres:admin@localhost/BaseChida";
 
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT * FROM empleado', ['1'], function(err, result) {
    //call `done()` to release the client back to the pool
    done();
    
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
    //output: 1
  });
});