
const express = require('express');
 
const ProductsService  = require('./../services/product.service');

 

const router = express.Router();
const service = new ProductsService();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);


    res.json(product);
  });
  
  router.get('/', (req, res) => {
    
     
    const products =  service.find();
   
     res.json(products);
  });



  router.post('/', (req,res)=>{
    const body = req.body;
 
    res.json({
 
      message: 'created',
      data: body
 
    });
  });

  module.exports = router;