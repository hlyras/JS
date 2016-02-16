// Global module/ require

var db = require('../db/connection');

var Produto = function() {
	this.id;
	this.name;
	this.descricao;

	this.save = function(callback) {
		Produto.save(this, callback);
	}
}

Produto.save = function(produto, callback) {
	'use strict'

	var query = null;
	if(produto.id){
		query = "update produto set name='"+ produto.name + "', descricao='"+produto.descricao+"';"
	} else {
		query = "insert into produto(name, descricao) values('"+produto.name+"','"+produto.descricao+");"
	}
	db.cnn.exec(query, callback);
}

Produto.list = function(callback) {
	'use strict'

	var query = null;
	query = "select * from produto";
	db.cnn.exec(query, callback)
}

Produto.get = function(id, callback) {
	'use strict'

	var query = null; 
	query = "select * from produto where id="+id;
	db.cnn.exec(query, callback);
}

Produto.remove = function(id, callback) {
	'use strict'

	var query = null;
	query = "delete from produto where id="+id;
	db.cnn.exec(query, callback);
}

Produto.materiasPrimas = function(id, callback) {
	'use strict'

	var query = null;
	query = "select id_materia from produto_materia where id_produto="+id;
	db.cnn.exec(query, callback);
}

Produto.precoCusto = function(id, callback) {
	'use strict'

	var query = null;
	var materias = Produto.materiasPrimas(id);
	query = "select id_materia from produto_materia where id_produto="+id;
	db.cnn.exec(query, callback);
}