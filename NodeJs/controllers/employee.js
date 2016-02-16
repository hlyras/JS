// Global module

var Employee = require('../models/employee');

var employeeController = {
  index: function(req, res, next) {
    'use strict'

    Employee.list(function(rows, err){
      if(!err) {
        res.render('employee/x', { employees: rows })
      } else {
        req.send("Error", 500)
      }
    })
  }
}

module.exports = employeeController;