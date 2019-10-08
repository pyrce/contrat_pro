const express = require('express');
const router=express();
const operationController = require('./Controller.js');

router.get('/', operationController.test);

module.exports = router;