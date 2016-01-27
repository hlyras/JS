// Objeto Employee

var Employee = function() {
	this.id;
	this.name;
	this.salario;

	this.save = function(){
		idGen++;
		this.id = idGen;
		Employee.dados.push(this);
	}
	this.edit = function(id) {
		var c = Employee.buscar(id);
		c.name = this.name;
		c.salario = this.salario;
		Employee.clean();
	}
}
var idGen = 0;
Employee.dados = [];

Employee.save =function() {
	var Id = document.getElementById('employeeId');
	var nome = document.getElementById("employeeName");
	var salario = document.getElementById("employeeSalario");
	var employee = new Employee();
	employee.name = nome.value;
	employee.salario = parseFloat(salario.value);
	if(nome.value=="Name" || nome.value==""){
		alert("Inclua um funcionário");
		nome.focus();
	}
	else if(Id.value!="") {
		employee.edit(Id.value);
		nome.focus();
	}
	else{
		employee.save();
		nome.focus();
	}
	Employee.register();
	Employee.relatorio();
	Employee.clean();
}

Employee.remove = function(id) {
	var backup = []
	for(i=0; i<Employee.dados.length; i++) {
		if(Employee.dados[i].id != id){
			backup.push(Employee.dados[i]);
		}
	}
	Employee.dados = backup;
}

Employee.edit = function(id) {
	var Id = document.getElementById('employeeId');
	var name = document.getElementById('employeeName');
	var salario = document.getElementById('employeeSalario');

	var c = Employee.buscar(id);

	Id.value = c.id;
	name.value = c.name;
	salario.value = c.salario;
}

Employee.register = function() {
	var tabela = document.getElementById('table_info');
	var html = "<tr><td>Name</td><td>Payment</td></tr>"
	for(i=0; i< Employee.dados.length; i++){
		var a = Employee.dados[i];
		html += "<tr>";
		html += "<td>"+a.name+"</td>";
		html += "<td>" +a.salario+"</td>";
		html += "<td> <a href='javascript:remove("+ a.id+")'> remove </a> </td>";
		html += "<td> <a href='javascript:edit("+ a.id+")'> edit </a> </td>";
		html += "</tr>";
	}
	tabela.innerHTML=html;
}

Employee.buscar = function(id) {
	for(i=0; i<Employee.dados.length; i++) {
		var c = Employee.dados[i];
		if(Employee.dados[i].id==id) {
			return c;
		}
	}
}

Employee.relatorio = function() {
	var c = Employee.dados.length;
	var qtd = document.getElementById('regEmployees');
	qtd.innerHTML=parseFloat(c);
}

Employee.clean = function () {
	var Id = document.getElementById('employeeId');
	var name = document.getElementById('employeeName');
	var salario = document.getElementById('employeeSalario');
	Id.value="";
	name.value="";
	salario.value="0.00";
}