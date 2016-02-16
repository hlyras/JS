// Global require/module
var db = require('../db/connection');
var Cliente = function() {
	this.id;
	this.name;
	this.telefone;

	this.save = function(callback) {
		Cliente.save(this, callback);
	}
}

Cliente.save = function(cliente, callback) {
	'use strict'

	var query = null
	if(cliente.id){
		query = "update cliente set name='"+cliente.name+"', telefone="+cliente.telefone+" where id="+cliente.id;
	} else {
		query = "insert into cliente(name, telefone) values('"+cliente.name+"',"cliente.telefone");"
	}
	db.cnn.exec(query, callback);
}

Cliente.list = function(callback) {
	'use strict'

	var query = null;
	query = "select * from cliente";
	db.cnn.exec(query, callback);
}

Cliente.get = function(id, callback) {
	'use strict'

	var query = null;
	query = "delete from cliente where id="+id;
	db.cnn.exec(query, callback);
}

Cliente.remove =  function(id, callback) {
	'use strict'
	
	var query = null;
	query = "delete from cliente where id="+cliente.id;
	db.cnn.exec(query, callback)
}