const express = require('express');
const router=express();
const operationController = require('../controller/meteoController.js');

router.get('/', operationController.list);
router.get('/delete/:id', operationController.delete);
router.post('/getmeteo', operationController.getmeteo);
module.exports = router;