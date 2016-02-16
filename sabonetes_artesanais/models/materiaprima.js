//Global module/require

var db = require('../db/connection');

var MateriaPrima = function() {
	this.id;
	this.name;
	this.descricao;
	this.preco;

	this.save = function(callback) {
		MateriaPrima.save(this, callback);
	};
};

MateriaPrima.save = function(materiaPrima, callback) {
	'use strict'

	var query = null;
	if(materiaPrima.id) {
		query = "update materia_prima set name='"+materiaPrima.name+"', descricao='"+materiaPrima.descricao+"', preco="+materiaPrima.preco+" where id="+materiaPrima.id;
	} else {
		query = "insert into materia_prima(name, descricao, preco) values('"+materiaPrima.name+"','"+materiaPrima.descricao+"',"+materiaPrima.preco+");"
	}
	db.cnn.exec(query, callback);
};

MateriaPrima.list = function(callback) {
	'use strict'

	var query = null;
	query = "select * from materia_prima";
	db.cnn.exec(query, callback);
};

MateriaPrima.get = function(id, callback) {
	'use strict'

	var query = null;
	query = "select * from materia_prima where id="+id;
	db.cnn.exec(query, callback);
};

MateriaPrima.remove = function(id, callback) {
	'use strict'

	var query = null;
	query = "delete from materia_prima where id="+id;
	db.cnn.exec(query, callback);
};

module.exports = MateriaPrima;