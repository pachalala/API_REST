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
  async function runQueries(sql) {
    let connection;
    try {
        connection = await promisePool.getConnection();
        await connection.beginTransaction();
        const results = await connection.query(sql);
        await connection.commit();
     //   console.log(results); // or console.table(results);
        return results;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if (connection) connection.release();
    }
}

   await  runQueries('SELECT * FROM platos').then ( rows =>{
    rows.map(r =>  {
  
        return {...rows, ingredientes: "xD"  };
      //  return {...item, ingredientes:  await  pool.query('SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato={r.ID}')};
      
      
      }
    
    )
});
 

console.log(rows);


//https://stackoverflow.com/questions/67776182/manage-nested-queries-for-mysql-in-node-js

/*
const [row_out] =      runQueries('SELECT * FROM platos').then ( roui =>
    {

        roui.map(  r =>   {
  

            const holi =  "x";//    runQueries( 'SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato=' +r.ID)
          
             return {...r, ingredientes: holi } });
          
            //  return r;
    }




);
*/
/*
const row_out =   rows.map(  r =>   {
  

    const holi =  async   runQueries( 'SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato=' +r.ID)
  
     return {...r, ingredientes: holi } });
  
    //  return r;
   
   
  
    console.log (row_out);
*/

/*
const [rows] =   await  pool.query('SELECT * FROM platos')

const row_out =  rows.map(  r =>   {
  

  const holi =   await getResult( 'SELECT idIngrediente, gramos as grs FROM ingredientes_platos  where idPlato=' +r.ID)

   return {...r, ingredientes: holi } });

  //  return r;
 
*/

 // console.log (row_out);