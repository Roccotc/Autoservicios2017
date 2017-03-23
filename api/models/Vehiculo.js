/**
 * Vehiculo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	marca : { 
  		type: 'string',
  		required: true,
  	},

  	modelo : { 
  		type: 'string',
  		required: true,
  	},

  	cilindrada : { 
  		type: 'string',
  		required: true,
  	},

  	placa : { 
  		type: 'string',
  		required: true,
  		unique: true,
  	},

  	tipo : { 
  		type: 'string',
  		required: true,
  	},

  	año : { 
  		type: 'int',
  		required: true,
  	},

  	numero_visita : { 
  		type: 'int',
  		required: true,
  	},

  	user_id : { 
  		type: 'int',
  		required: true,
  	},

  }
};

