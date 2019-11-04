const express = require('express');
const router=express();
const operationController = require('../controller/livresController.js');

router.get('/', operationController.list);
router.get('/ajout', operationController.ajout);
router.get('/addgenre', operationController.addgenre);
router.post('/add', operationController.add);
router.post('/updategenre', operationController.updategenre);
module.exports = router;