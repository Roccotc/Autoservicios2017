/**
 * Servicios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 schema: true,
    connection: 'sqlserver',
    tableName: 'servicios',

  attributes: {

    is_s: {primaryKey: true},

  	nombre : { 
  		type: 'string',
  		required: true,
  	},

  	costo : { 
  		type: 'int',
  		required: true,
  	},

  	duracion : { 
  		type: 'string',
  		required: true,
  	},

  }
};

