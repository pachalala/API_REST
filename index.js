const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req ,res)=>{
   res.send('hola soy un servidor express :)');
})


app.get('/nueva-ruta',(req ,res)=>{
    res.send('hola soy nueva ruta ');
 })
 

app.listen(port, ()=>{

  console.log('mi port' + port);
 
})