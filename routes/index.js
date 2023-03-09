 
//import {productsRouter } from './products.router.js' ;
 

import  express   from 'express' ;
import { ProductsService } from '../services/product.service.js' 

const productsRouter = express.Router();
 
//const service = new ProductsService();

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


export function routerApi(app){

 

    app.use ('/products', productsRouter);

}

//module.exports  = routerApi;
 
