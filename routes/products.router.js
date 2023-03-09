 
 
import  express   from 'express' ;

import  { ProductsService}   from './../services/product.service.js'; 
 

 
const productsRouter = express.Router();
 
const service = new ProductsService();

productsRouter.get('/:id', (req, res) => {
    const { id } = req.params;
 
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });


  productsRouter.get('/test', (req, res) => {
    const { id } = req.params;
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });

  

  productsRouter.get('/',     (req, res) => {
   
    const products =   service.find();
    res.json(products);

  });
/*
  productsRouter.get('/',   async (req, res) => {
   
    const products = await service.find();
    res.json(products);

  });
*/
  module.exports = productsRouter; 

 
