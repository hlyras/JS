// Routes

function goHome() {
}

function save() {
	Employee.save();
}

function remove(id) {
	Employee.remove(id);
	Employee.register();
	Employee.relatorio();
}

function edit(id) {
	Employee.edit(id);
}

