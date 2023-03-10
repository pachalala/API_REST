 
import  express   from 'express' ;

import  { PlatosService}   from '../services/platos.service.js'; 
 

 
export const platosRouter = express.Router();
 
const service = new PlatosService();

platosRouter.get('/:id', (req, res) => {
    const { id } = req.params;
 
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });


  platosRouter.get('/test', (req, res) => {
    const { id } = req.params;
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });

  

  platosRouter.get('/',    async (req, res) => {
  
    const products =  await service.find();
    res.json(products);

  });
 
 

 
