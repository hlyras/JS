//global module require/export
var db = require('../db/connection');
var Produto = require('../models/produto');
var MateriaPrima = require('../models/materiaprima');

var produtoController = {
	index: function(req, res, next) {
		'use strict'

		Produto.list(function(rows, err) {
			if(!err){
				res.render('produto/index', { produtos: rows })
			} else {
				res.send('err', 500);
			}
		});
	},
	add: function(req, res, next) {
		'use strict'

		res.render('produto/add');
	},
	create: function(req, res, next) {
		'use strict'

		var produto = new Produto();
		produto.name = req.body.name;
		produto.descricao = req.body.descricao;

		produto.save(function(rows, err) {
			if(!err) {
				res.redirect('/produto');
			} else {
				res.send('err', 500);
			}
		});
	},
	edit: function(req, res, next) {
		'use strict'

		Produto.get(req.param('id'), function(rows, err){
			if(!err) {
				res.render('produto/edit', rows[0]);
			} else {
				res.send('err', 500);
			}
		});
	},
	update: function(req, res, next) {
		'use strict'

		var produto = new Produto();
		produto.id = req.body.id;
		produto.name = req.body.name;
		produto.descricao = req.body.descricao;

		produto.save(function(rows, err) {
			if(!err){
				res.redirect('/produto');
			} else {
				res.send('err', 500);
			}
		});
	},
	remove: function(req, res, next) {
		'use strict'

		Produto.remove(req.param('id'), function(rows, err) {
			if(!err) {
				res.redirect('/produto')
			} else {
				res.send('err', 500);
			}
		});
	},
	info: function(req, res, next) {
		'use strict'

		Produto.get(req.param('id'), function(rows, err){
			if(!err) {
				var produto = rows;
				Produto.materiasPrimas(req.param('id'), function(rows, err){
					if(!err) {
						var materias = rows;
						MateriaPrima.list(function(rows, err){
							if(!err) {
								res.render('produto/info', { produto: produto, materias: materias, mats: rows })
							} else {
								res.send('err', 500);
							}
						})
					} else {
						res.send('err', 500);
					}
				})
			} else {
				res.send('err', 500);
			}
		})
	},
	materias: function(req, res, next) {
		'use strict'

		Produto.materiasPrimas(req.param('id'), function(rows, err) {
			if(!err) {
				res.render('produto/mat_pro', { materias: rows })
			} else {
				res.send('err', 500)
			}
		})
	},
	listarMaterias: function(req, res, next) {
		'use strict'

		MateriaPrima.list(function(rows, err){
			if(!err){
				console.log(req.param('id'));
				res.render('produto/mat_add', { materias: rows, produto: req.param('id') })
			} else {
				res.send('err', 500);
			}
		})
	},
	insert: function(req, res, next) {
		'use strict'

		console.log("variaveis idp e id")
		console.log(req.param('id'));
		console.log(req.param('idM'));

		Produto.insertMateria(req.param('id'), req.param('idM'), function(rows, err) {
			if(!err) {
				res.render('/');
			} else {
				res.send('err', 500);
			}
		})
	}
}

module.exports = produtoController;