/**
 * AdminsController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	

	servicios_admin: function (req, res) {
		console.log('Entro' );
		Servicios.find().exec( function afterFind(err, Servicios) {
  		if (err) { return res.serverError(err); }
		return res.view('servicios-admin', {servicios: Servicios});


	 });

	},



	login: function (req, res) {

    // Busca en la Base de Datos el correo
		console.log(" entro f login admin ");
      Admins.findOne({
      email: req.param('email')
    }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();

      console.log("te encontramos admin: "+user.nombre);

      if(user.clave == req.param('clave'))
      {
				console.log("Incio de sesion exitoso");
      	req.session.me = user.id;   // Se guarda la sesión de un admin

				// Busca todas las citas
				Facturas.find().exec( function afterFind(err, facturas) {
					if (err) return res.negotiate(err);

					console.log("Facturas capturadas");


					return res.view('inicio-admin', {
						usuario_admin:
							{
								id: user.id,
								nombre: user.nombre,
								email: user.email,
								apellido: user.apellido,
							},

							ordenes: facturas

					});
				});


	  }
	  else
	  {
	    console.log('clave invalida');
	    return res.view('homepage');
	  }

    });

  },

	reportes: function (req, res) {
// PRIMER QUERY
		Servicios.query('use autoservicio; SELECT SUM(costo) AS IngresosTotales FROM orden_Servicio INNER JOIN detalle_orden on orden_Servicio.id = detalle_orden.orden_id INNER JOIN servicios on  detalle_orden.servicios_id = servicios.id',
				function(err, total){

					var IngresosTotales = total[0].IngresosTotales;

					Servicios.query('SELECT servicios.nombre,  SUM(costo) AS Ingreso FROM orden_Servicio INNER JOIN detalle_orden on orden_Servicio.id = detalle_orden.orden_id INNER JOIN servicios on  detalle_orden.servicios_id = servicios.id  group by servicios.nombre order by Ingreso',
						function(err, ingresos){

							return res.view('reportes-admin',{ data1: { IngresosTotales: IngresosTotales, IngresosPorServicio: ingresos } });

						});

				});
// SEGUNDO QUERY
				 Servicios.query('use autoservicio; SELECT servicios.nombre as Servicio, COUNT(servicio_id) AS Ocurrencia FROM  detalle_orden INNER JOIN servicios on detalle_orden.servicios_id = servicios.id GROUP BY servicio_id  ORDER BY Ocurrencia DESC LIMIT  1;',
					function(err, result){

						var data2 = {servicioMasPedido: result.Servicio, numeroDeVecesPedido: result.Ocurrencia};

					});
					
// TERCER QUERY
					Servicios.query('SELECT vehiculo.marca as Vehiculo, count(vehiculo_id) as Ocurrencia from vehiculo INNER JOIN orden_servicio ON vehiculo.id =  orden_servicio.vehiculo_id group by vehiculo.marca order by Ocurrencia desc',
						function(err, result2){

							var data2 = {vehiculoMasFrecuente: result2.Vehiculo, numeroDeVecesVehiculo: result2.Ocurrencia};

						});



				var IngresosTotales = 13000;
				var ingresos;
				var servicioMasPedido = 'Revision';
				return res.view('reportes-admin',{ data1: { IngresosTotales: IngresosTotales, IngresosPorServicio: ingresos }, servicioMasPedido: servicioMasPedido   });

},

};
