 
const express = require('express');

const ProductsService = require('./../services/product.service');
const router = express.Router();
 
const service = new ProductsService();

router.get('/:id', (req, res) => {
    const { id } = req.params;
 
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });


  router.get('/test', (req, res) => {
    const { id } = req.params;
    res.json({
      id: id,
      name: 'product 3',
      price: 2000,
    });
  });

  
  router.get('/',   async (req, res) => {
   
    const products = await service.find();
    res.json(products);

  });

  module.exports = router; 

 
