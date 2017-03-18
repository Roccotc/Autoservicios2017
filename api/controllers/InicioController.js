/**
 * InicioController
 *
 * @description :: Server-side logic for managing Inicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
cargar: function (req, res) {

    // Si no esta loggeado que lo lleve al homepage
    if (!req.session.me) {

    	console.log("No estas loggeado!");
    	return res.view('homepage');
    }

    // Busca las citas actuales

  },

};

