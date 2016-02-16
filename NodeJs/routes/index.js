var express = require('express');
var homeController = require('../controllers/home');

var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

module.exports = router;