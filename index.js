import express from 'express'
import cors from 'cors';

import {routerApi} from './routes/index.js';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

 



 
app.get('/', (req, res) => {
  res.send('hola soy un servidor express :)');
});

 
/*
app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy nueva ruta ');
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else res.send('no hay parametros');
});
<<<<<<< HEAD
*/

routerApi(app);

app.listen(port, () => {
  console.log('mi port' + port);
});
 
