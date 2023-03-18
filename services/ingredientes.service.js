import   {pool }  from '../db.js'
 


  
export  class ingredientesService {


 
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
   
    const [rows, fields] = await pool.execute('SELECT ID as id, nombre as nombre, 0 as cantidad, false as chek FROM ingredientes');
    return(rows);
  

    }


  async findx() {
   
    return(


        [
            {
              id: 1,
              nombre: "porotos",
              cantidad:0,
              chek:false
            },
            {
              id: 2,
              nombre: "zapallo",
              cantidad:0,
              chek:false 
            },
            {
              id: 3,
              nombre: "cebolla",
              cantidad:0,
              chek:false 
            },
            {
              id: 4,
              nombre: "arroz",
              cantidad:0,
              chek:false 
            },
            {
              id: 5,
              nombre: "pimenton",
              cantidad:0,
              chek:false 
            }
            ,
            {
              id: 6,
              nombre: "pollo",
              cantidad:0,
              chek:false 
            }
            ,
            {
              id: 7,
              nombre: "fideos",
              cantidad:0,
              chek:false 
            }
            ,
            {
              id: 8,
              nombre: "carne molida" ,
              cantidad:0,
              chek:false
            }
            ,
            {
              id: 9,
              nombre: "salsa de tomate" ,
              cantidad:0,
              chek:false
            }
            ,
            {
              id: 10,
              nombre: "ajo" ,
              cantidad:0,
              chek:false
            },
            {
              id: 10,
              nombre: "caldo verduras" ,
              cantidad:0,
              chek:false
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
   
  }

  async update(id, changes) {
    
  }

  async delete(id) {
    
  }
 
}
 