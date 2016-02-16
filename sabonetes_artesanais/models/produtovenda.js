// Global module/ require

var db = require('../db/connection');

var ProdutoVenda = function() {
	this.id;
	this.name;
	this.descricao;
	this.precoVenda;

	this.save = function(callback) {
		ProdutoVenda.save(this, callback)
	}
}

ProdutoVenda.save = function(produtoVenda, callback) {
	'use strict'

	var query = null;

	if(produtoVenda.id) {
		query = "update produto_venda set name='"+produtoVenda.name+"', descricao='"+produtoVenda.descricao+"', preco_venda="produtoVenda.precoVenda;
	} else {
		query = "insert into produto_venda(name, descricao, preco_venda) values('"+produtoVenda.name+"','"+produtoVenda.descricao"',"+produtoVenda.precoVenda+");"
	}

	db.cnn.exec(query, callback);
}

ProdutoVenda.list = function(callback) {
	'use strict'

	var query = null;

	query = "select * from produto_venda";

	db.cnn.exec(query, callback);
}

ProdutoVenda.get = function(id, callback) {
	'use strict'

	var query = null;

	query = "select * from produto_venda where id="+id;

	db.cnn.exec(query, callback);
}

ProdutoVenda.remove = function(id, callback) {
	'use strict'

	var query = null;

	query = "delete from produto_venda where id="+id;
}

