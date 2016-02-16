// Global module

var User = require('../models/user');

var userController = {
  index: function(req, res, next) {
    'use strict'

    User.list(function(rows, err){
      if(!err) {
        res.render('user/index', { users: rows });
      } else {
        req.send("Error", 500);
      }
    })
  },
  add: function(req, res, next) {
    'use strict'

    User.list(function(rows, err) {
      if(!err) {
        res.render('/user/add', { occupations: rows });
      } else {
        res.send('err', 500);
      }
    })
  },
  create: function(req, res, next) {
    'use strict'

    var user = new User();
    user.name = req.param('name');
    user.cpf = req.param('cpf');
  }
}

module.exports = userController;