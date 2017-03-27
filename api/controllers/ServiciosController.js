/**
 * ServiciosController
 *
 * @description :: Server-side logic for managing servicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	carga: function (req, res, next) {
		
		console.log('hola');

    	Servicios.find().exec( function afterFind(err, servicios) {
			
			if (err) return res.negotiate(err);

			console.log("servicios capturadas");
			console.log(servicios);
			console.log(servicios[0].nombre);
			return res.view('inicio-cliente', { serviciost : servicios });
		});
  	},

    agregarserv: function (req, res, next) {
    	console.log("entro");
    Vehiculo.findOne({
    	placa: req.param('placa')
    }, function foundVeh (err, vehiculo) {


    	if (err) return res.negotiate(err);
      	if (!vehiculo) return res.notFound();

      	console.log("entro a findOne");
      	var vid = vehiculo.id;
      	var uid = vehiculo.user_id;
      	console.log(vid);
      	console.log(uid);
      	User.findOne({
      		id: uid
      	}, function foundCed (err, user) {

      		if (err) return res.negotiate(err);
      		if (!user) return res.notFound();

      		var uced = user.cedula;
      		var fecha = '1';
      		var status = 'En Proceso';

      		Orden_servicio.create({fecha:fecha, vehiculo_id:vid, cedula:uced, status:status}).exec(function (err, orden){
			
			if (err) return res.negotiate(err);

			var ordenid = orden.id;
			var descuento = 0;
			console.log(ordenid);


			Detalle_orden.create({servicios_id:req.param('servicio'), orden_id:ordenid, descuento:descuento}).exec(function (err, detorden){
				console.log("hola");
				if (err) return res.negotiate(err);
				return res.view('inicio-cliente');
			});
      	});

    });

	});

	},

};

