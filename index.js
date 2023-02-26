const express = require('express');
const faker = require('faker');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola soy un servidor express :)');
});

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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'product 2',
    price: 2000,
  });
});

app.get('/products', (req, res) => {
  
  const products = [];
  for (let index=0; index<100; index++){

products.push({

   name: faker.commerce.productName(),
   price: parseInt(faker.commerce.price(),10),
   image: faker.image.imageUrl(),
    

});

  }
  
   res.json(products);
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


app.listen(port, () => {
  console.log('mi port' + port);
});
