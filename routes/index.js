 
 import {platosRouter } from './platos.router.js' ;
 import {ingredientesRouter } from './ingredientes.router.js' ;

 

import  express   from 'express' ;
 
import   {pool }  from '../db.js'

//const productsRouter = express.Router();
 
//const service = new ProductsService();

/*
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

  
  productsRouter.get('/',    async (req, res) => {
  
    const products =  await service.find();
    res.json(products);


  });
*/

export function routerApi(app){

 

    app.use ('/platos', platosRouter);

    app.use ('/ingredientes', ingredientesRouter);

    

}

//module.exports  = routerApi;
 
