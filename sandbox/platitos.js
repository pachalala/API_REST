//import   {pool }  from '../db.js'
import { createPool } from 'mysql2/promise';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
} from './../config.js';

const conn = await createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

const [rows, fields] = await conn.execute('SELECT * FROM platos');

const [ring, fing] = await conn.execute(
  'SELECT idPlato, idIngrediente, gramos as grs FROM ingredientes_platos '
);

const row_out = rows.filter((r) => {

  const _ingredientes = ring.map((ingre) => {
    if (ingre.idPlato == r.ID) {
      return [ingre.idIngrediente, ingre.grs];
    }
  });

 
  return { ...r, ingredientes: _ingredientes };
  //   return {...r, ingredientes:5};
});


console.log(JSON.stringify(row_out));

//const [rows] =    await  pool.query('SELECT * FROM platos' );

/*


 const row_out =  rows.map(r =>  {
   
   return {...r, ingredientes:  (    pool.query('SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato='+r.ID))};
 

 }
   )
 
*/
