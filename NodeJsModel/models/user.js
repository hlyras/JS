// Global module

var db = require('../db/connection')

var User = function() {
	this.id;
	this.name;
	this.cpf;

	this.save = function() {
		User.save(this, callback);
	}
}

User.save = function(user, callback) {
	'use strict'

	var query = null

	if (User.id) {
		query = "update users set name = '" + user.name + "' where id = " + user.id;
	} else {
		query = "insert into users(name) values ('" + user.name + "')";
	}
	
	db.cnn.exec(query, callback);
};

User.list = function(callback) {
	'use strict'

	var query = null

	query = "select * from users";

	db.cnn.exec(query, callback);
}

module.exports = User;