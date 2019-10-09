const express = require('express');
const router=express();
const operationController = require('../controller/OperationController.js');

router.get('/', operationController.list);


module.exports = router;