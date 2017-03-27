/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //connection: 'sailsMSSQLServer',

  attributes: {

  	nombre : {
  		type: 'string',
  		required: true,
  	},

  	apellido : {
  		type: 'string',
  		required: true,
  	},

  	email : {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true,
  	},

    cedula : {
      type: 'string',
      required: true,
      unique: true,
    },

    telefono : {
      type: 'string',
    },

    direccion: {
      type: 'string',
    },

    clave: {
      type: 'string',
      required: true,
    },

  }
};
