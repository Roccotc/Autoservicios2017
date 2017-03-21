/**
 * ServiciosController
 *
 * @description :: Server-side logic for managing servicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	carga: function (req, res, next) {

    Servicios.query('select * from servicios',function(err, servicios){

    		if (err) return next(err);
      		if (!servicios) return next();

			res.view('servicios', {
				servicios: {

					//Aqui van los atributos de los servicios

				}
			});
		});

  },

};

