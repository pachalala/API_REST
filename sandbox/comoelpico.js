
// https://www.npmjs.com/package/mysql2
import   mysql   from  'mysql2';
 
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
  } from './../config.js'

 
// create the connection to database
const connection = mysql.createConnection({
    host:DB_HOST, user: DB_USER, database: DB_NAME,password:DB_PASSWORD,  port: DB_PORT 
});

// simple query
  let rout;
  
  
  connection.query(
  'SELECT * FROM platos',
  function(err, results, fields) {
   
    const row_out =    results.map(       r =>  {
   
    /*
         const [_ingredientes, fields] =      connection.query('SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato='+r.ID,
            
         function(err, results, fields) {
          
            _ingredientes = results;
         }

         
         ) ;
     //
         return {...r, ingredientes:{_ingredientes}};
      */
         return {...r, ingredientes:5};
       
      
       });
        
console.log(row_out);

     
      rout =   row_out
    }
      );

   
 

 console.log (  rout);