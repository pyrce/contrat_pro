const express = require('express');
const router=express();
const operationController = require('../controller/OperationController.js');

router.get('/', operationController.list);
router.get("/ajout",operationController.ajout);
router.post("/add",operationController.add);
router.get("/calcul/:id",operationController.calculate);
router.get("/edit/:id",operationController.modifier);
router.post("/update",operationController.update);
router.get("/desactiver/:id",operationController.desactiver);
module.exports = router;