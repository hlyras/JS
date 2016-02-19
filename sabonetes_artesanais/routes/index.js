var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var materiaController = require('../controllers/materiaprima');
var produtoController = require('../controllers/produto');

/* GET home page. */
router.get('/', homeController.index);

router.get('/materiaPrima', materiaController.index);
router.get('/materiaPrima/add', materiaController.add);
router.post('/materiaPrima/create', materiaController.create);
router.get('/materiaPrima/:id/edit', materiaController.edit);
router.post('/materiaPrima/update', materiaController.update);
router.get('/materiaPrima/:id/remove', materiaController.remove);

router.get('/produto', produtoController.index);
router.get('/produto/add', produtoController.add);
router.post('/produto/create', produtoController.create);
router.get('/produto/:id/edit', produtoController.edit);
router.post('/produto/update', produtoController.update);
router.get('/produto/:id/remove', produtoController.remove);

module.exports = router;