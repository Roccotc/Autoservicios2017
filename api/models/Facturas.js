/**
 * Facturas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cedulaCliente : {
  		type: 'string',
  	},

    nombreCliente: {
  		type: 'string',
  	},

  	marcaVehiculo : {
  		type: 'string',
  	},

    servicioRealizado : {
  		type: 'string',
  	},

    fecha : {
  		type: 'string',
  	},

  	descuento : {
  		type: 'int',
  	},

    status : {
  		type: 'string',
  	},


  }
};
