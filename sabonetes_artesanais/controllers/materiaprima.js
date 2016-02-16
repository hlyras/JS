var db = require('../db/connection');
var MateriaPrima = require('../models/materiaprima')

var materiaController = {
	index: function(req, res, next) {
		'use strict'

		MateriaPrima.list(function(rows, err){
			if(!err) {
				res.render('materiaPrima/index', { materias: rows });
			} else {
				res.send('err', 500);
			}
		})
	},
	add: function (req, res, next) {
		'use strict';
		
		res.render('materiaPrima/add');
	},
	create: function(req, res, next) {
		'use strict'

		var materiaPrima = new MateriaPrima();
		materiaPrima.name=req.body.name;
		materiaPrima.preco=req.body.preco;
		materiaPrima.descricao=req.body.descricao;

		materiaPrima.save(function(rows, err) {
			if(!err) {
				res.redirect('/materiaPrima')
			} else {
				res.send('err', 500);
			}
		})
	},
	edit: function(req, res, next) {
		'use strict'

		MateriaPrima.get(req.param('id'), function(rows, err) {
			if(!err) {
				res.render('materiaPrima/edit', rows[0]);
			} else {
				res.send('err', 500);
			}
		})
	},
	update: function(req, res, next) {
		'use strict'

		var materiaPrima = new MateriaPrima();
		materiaPrima.id=req.body.id;
		materiaPrima.name=req.body.name;
		materiaPrima.preco=req.body.preco;
		materiaPrima.descricao=req.body.descricao;

		materiaPrima.save(function(rows, err) {
			if(!err) {
				res.redirect('/materiaPrima');
			} else {
				res.send('err', 500);
			}
		})
	},
	remove: function(req, res, next) {
		'use strict'

		MateriaPrima.remove(req.param('id'), function(rows, err){
			if(!err) {
				res.redirect('/materiaPrima');
			} else {
				res.send('err', 500);
			}
		})
	}
};

module.exports = materiaController;