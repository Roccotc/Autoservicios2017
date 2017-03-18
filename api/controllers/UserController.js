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
      	return res.view('inicio', {
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
	
};

