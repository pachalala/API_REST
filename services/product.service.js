const  pool  = require('../db');
const PORT = require('../config.js');
 
//import { pool } from '../db.js'
// import {PORT} from '../config.js'





class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    
  }

  async create(data) {
    const newProduct = {
      id: 1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    const [rows] =     pool.query('SELECT * FROM users')
      res.json(rows)
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
