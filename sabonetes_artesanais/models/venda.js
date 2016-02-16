// Global module/require
var db = require('../db/connection');

var Venda = function() {
	this.id;
	this.idCliente

	this.save = function(callback) {
		Venda.save(this, callback);
	}
}

Venda.save = function(venda, callback) {
	'use strict'

	var query = null;

	if(venda.id) {
		query = "update venda set id_cliente="+venda.idCliente+" where id="+venda.id;
	} else {
		query = "insert into venda(id_cliente) values("+venda.idCliente+");"
	}

	db.cnn.exec(query, callback);
}

Venda.remove = function(id, callback) {
	'use strict'

	var query = null;

	query = "delete from venda where id="+id;

	db.cnn.exec(query, callback);
}

Venda.get = function(id, callback) {
	'use strict'

	var query = null;

	query = "select * from venda where id="+id;

	db.cnn.exec(query, callback);
}

Venda.list = function(callback) {
	'use strict'

	var query = null;

	query = "select * from venda";

	db.cnn.exec(query, callback);
}