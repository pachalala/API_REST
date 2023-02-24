const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req ,res)=>{
   res.send('hola soy un servidor express :)');
})

app.listen(port, ()=>{

  console.log('mi port' + port);
 
})