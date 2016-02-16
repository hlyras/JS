// Global module
var Employee = function() {
	this.id;
	this.name;
	this.cpf;

	this.save = function() {
		Employee.save(this, callback);
	}
}

Employee.save = function(Employee, callback) {
	'use strict'

	var query = null

	if (Employee.id) {
		query = "update users set name = '" + employee.name + "' where id = " + employee.id;
	} else {
		query = "insert into users(name) values ('" + employee.name + "')";
	}
	
	db.cnn.exec(query, callback);
};

Employee.list = function(callback) {
	'use strict'

	var query = null

	query = "select * from users";

	db.cnn.exec(query, callback);
}

module.exports = Employee;