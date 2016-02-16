var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var materiaController = require('../controllers/materiaprima');

/* GET home page. */
router.get('/', homeController.index);

router.get('/materiaPrima', materiaController.index);
router.get('/materiaPrima/add', materiaController.add);
router.post('/materiaPrima/create', materiaController.create);
router.get('/materiaPrima/:id/edit', materiaController.edit);
router.post('/materiaPrima/update', materiaController.update);
router.get('/materiaPrima/:id/remove', materiaController.remove);

module.exports = router;