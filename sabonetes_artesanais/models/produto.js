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
		query = "update produto set name='"+produto.name+"', descricao='"+produto.descricao+"' where id="+produto.id;
	} else {
		query = "insert into produto(name, descricao) values('"+produto.name+"','"+produto.descricao+"');"
	}
	db.cnn.exec(query, callback);
}

Produto.list = function(callback) {
	'use strict'

	var query = null;
	query = "select * from produto";
	db.cnn.exec(query, callback);
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
	query = "select distinct * from materia_prima inner join produto_materia on materia_prima.id=produto_materia.id_materia where produto_materia.id_produto="+id;
	db.cnn.exec(query, callback);
}

Produto.insertMateria = function(id_produto, id_materia, callback) {
	'use strict'

	var query = null;
	query = "insert into produto_materia(id_produto, id_materia) values("+id_produto+","+id_materia+");"
	db.cnn.exec(query, callback);
}

Produto.removeDuplicate = function(callback) {
	'use strict'

	var query = null;
	query = "delete a from produto_materia as a, produto_materia as b where a.id_produto=b.id_produto and a.id_materia=b.id_materia and a.id>b.id";
	db.cnn.exec(query, callback);
}

Produto.removeMateria = function(id_produto, id_materia, callback) {
	'use strict'

	var query = null;
	query = "delete from produto_materia where id_produto="+id_produto+" and id_materia="+id_materia;
	db.cnn.exec(query, callback);
}

module.exports = Produto;