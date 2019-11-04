const express = require('express');
const router=express();
const operationController = require('../controller/OperationController.js');

router.get('/', operationController.list);
router.get("/ajout",operationController.ajout);
router.get("/calcul/:id",operationController.calcul);
router.get("/edit/:id",operationController.edit);
router.post("/add",operationController.add);
router.post("/update",operationController.update);
router.get("/desactiver/:id",operationController.desactiver);
router.get("/technos",operationController.technos);
module.exports = router;