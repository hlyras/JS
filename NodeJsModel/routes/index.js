var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var userController = require('../controllers/user');

/* GET home page. */
router.get('/', homeController.index);

router.get('/user', userController.index);
router.get('/user/add', userController.add);
router.post('/user/create', userController.create);

module.exports = router;
