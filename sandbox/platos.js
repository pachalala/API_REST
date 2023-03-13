import mysql from "mysql2";

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from './../config.js'


const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password:  DB_PASSWORD,
    database: DB_NAME
});
 
  const promisePool = pool.promise();
  async function runQueries() {
    let connection;
    try {
        connection = await promisePool.getConnection();
        await connection.beginTransaction();
        const results = await connection.query("some query");
        await connection.commit();
        console.log(results); // or console.table(results);
        return results;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if (connection) connection.release();
    }
}

//https://stackoverflow.com/questions/67776182/manage-nested-queries-for-mysql-in-node-js

const [rows] =  runQueries('SELECT * FROM platos');


const row_out =  rows.map(  r =>   {
  

    const holi =   runQueries( 'SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato=' +r.ID)
  
     return {...r, ingredientes: holi } });
  
    //  return r;
   
   
  
    console.log (row_out);

/*
const [rows] =   await  pool.query('SELECT * FROM platos')

const row_out =  rows.map(  r =>   {
  

  const holi =   await getResult( 'SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato=' +r.ID)

   return {...r, ingredientes: holi } });

  //  return r;
 
*/

  console.log (row_out);