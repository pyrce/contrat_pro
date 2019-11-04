const express = require('express');
const router=express();
const operationController = require('../controller/nojsController.js');


router.get('/',operationController.list);



module.exports = router;