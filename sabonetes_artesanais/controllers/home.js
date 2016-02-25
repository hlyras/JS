//global module export/require
var MateriaPrima = require('../models/materiaprima');

var homeController = {
	index: function(req, res, next) {
		'use strict'

		res.render('home/index');
	}
}

module.exports = homeController;