const express = require('express');
const router=express();
const operationController = require('../controller/articlesController.js');

router.get('/', operationController.list);
router.get('/all', operationController.all);
router.get('/ajout', operationController.ajout);
//router.get('/promo/:id', operationController.promo);
router.get('/detail/:id', operationController.detail);
router.post('/add', operationController.add);
module.exports = router;