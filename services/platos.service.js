 
 import   {pool }  from '../db.js'
 


  
export  class PlatosService {


 
  constructor(){
 
      
  }

  
  async create(data) {
    const newProduct = {
      id: 1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
   
    return(


      [
        {
          id: 1,
          nombre: "porotos con riendas",
          integrantes: 1,
      
          ingredientes: [
             {
              id_ingrediente:1,
              grs: 100
             },
             {
              id_ingrediente:2,
              grs: 50  
             },
             {
              id_ingrediente:3,
              grs: 50
             },
             {
              id_ingrediente:7,
              grs: 30
             }
          ]
       
        },
        {
          id: 2,
          nombre: "pollo con arroz",
          integrantes: 2,
      
          ingredientes: [
             {
              id_ingrediente:3,
              grs: 50
             },
             {
              id_ingrediente:6,
              grs: 150
             },
             {
              id_ingrediente:4,
              grs: 50
             }
          ]
       
        },
        {
          id: 3,
          nombre: "fideo bolognesa",
          integrantes: 3,
      
          ingredientes: [
             {
              id_ingrediente:3,
              grs: 50
             },
             {
              id_ingrediente:9,
              grs: 50
             },
             {
              id_ingrediente:7,
              grs: 50
             },
             {
              id_ingrediente:8,
              grs: 50
             }
          ]
        }
      ] 
      

    ); 



    /*
    const [rows] =   await  pool.query('SELECT * FROM platos')

     return (rows);
 */
/*
     return( {
      id: 123,
      name: 'product 3',
      price: 2000,
    } );   
  */  
   
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
 