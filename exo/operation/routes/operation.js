const express = require('express');
const router=express();
const operationController = require('../controller/operationController.js');

router.get('/', operationController.list);
router.post('/add', operationController.add);


module.exports = router;
