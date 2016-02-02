// global modeule

var homeController = {
  index: function(req, res, next) {
    'use strict'
    res.render('home/index', { title: 'Inventory control' });
  }
};

module.exports = homeController;
