/**
 * AdminsController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	login: function (req, res) {

    // Busca en la Base de Datos el correo

      Admins.findOne({
      email: req.param('email')
    }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();

      console.log("te encontramos admin: "+user.nombre);

      if(user.clave == req.param('clave'))
      {
      	req.session.me = user.id;   // Se guarda la sesión de un admin

				// Busca todas las citas
				Facturas.find().exec( function afterFind(err, facturas) {
					if (err) return res.negotiate(err);

					console.log("Facturas capturadas");


					return res.view('inicio-admins', {
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

};
