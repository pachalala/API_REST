 
import  express   from 'express' ;

import  { ingredientesService}   from '../services/ingredientes.service.js'; 
 

 
export const ingredientesRouter = express.Router();
 
const service = new ingredientesService();
 
 

ingredientesRouter.get('/',    async (req, res) => {
  
    const products =  await service.find();
    res.json(products);

  });
 
 

 
