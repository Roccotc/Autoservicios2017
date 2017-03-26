/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	login: function (req, res) {

    // Busca en la Base de Datos el correo
      User.findOne({
      email: req.param('email')
    }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();

      console.log("te encontramos: "+user.nombre);

      if(user.clave == req.param('clave'))
      {
      	req.session.me = user.id;   // Se guarda la sesión de un usuario
      	return res.view('inicio-cliente', {
	        usuario:
		        {
		          id: user.id,
		          nombre: user.nombre,
		          email: user.email,
		          apellido: user.apellido,
		          carnet: user.carnet
		        }
	      });
	  }
	  else
	  {
	    console.log('clave invalida');
	    return res.view('homepage');
	  }

    });

  },

	registrar: function (req, res) {
		console.log('Entro' );
		User.create({nombre:req.param('name'),apellido:req.param('lastname'),email:req.param('email'),cedula:req.param('ci'),telefono:req.param('telf'),direccion:req.param('direccion'),clave:req.param('contraseña')}).exec(function (err, user){
  	if (err) { return res.serverError(err); }
		var user_id = user.id;
		console.log('usuario '+user.nombre+' creado exitosamente');

		Vehiculo.create({marca:req.param('marca'),modelo:req.param('modelo'),cilindrada:req.param('cilindrada'),placa:req.param('placa'),tipo:req.param('tipo'),año:req.param('año'),user_id:user_id}).exec(function (err, carro){
			if (err) return res.negotiate(err);
		  return res.view('login');
			console.log('vehiculo '+carro.marca+' asignado exitosamente al usuario '+user.id);
		});
	 });

	},



};
