/**
 * Orden_servicio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

   schema: true,
    connection: 'sqlserver',
    tableName: 'orden_servicio',

  attributes: {

  	fecha : { 
  		type: 'string',
  		required: true,
  	},

  	vehiculo_id : { 
  		type: 'int',
  		required: true,
  	},

	cedula : { 
  		type: 'string',
  		required: true,
  	},

  	status : { 
  		type: 'string',
  		required: true,
  	},

  }

};

