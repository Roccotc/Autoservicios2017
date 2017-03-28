/**
 * Vehiculo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {



    schema: true,
    connection: 'sqlserver',
    tableName: 'vehiculo',

  	marca : {
  		type: 'string',
  		
  	},

  	modelo : {
  		type: 'string',
  		
  	},

  	cilindrada : {
  		type: 'string',
  		
  	},

  	placa : {
  		type: 'string',
  		

  	},

  	tipo : {
  		type: 'string',
  		
  	},

  	año : {
  		type: 'int',
  	},

  	user_id : {
  		type: 'int',
  		
  	},

  }
};
