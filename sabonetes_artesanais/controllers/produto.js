//global module require/export
var db = require('../db/connection');
var Produto = require('../models/produto');

var produtoController = {
	index: function(req, res, next) {
		'use strict'

		Produto.list(function(rows, err){
			if(!err){
				res.render('produto/index', { produtos: rows });
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
	}
}

module.exports = produtoController;