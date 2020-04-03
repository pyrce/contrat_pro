const express = require("express");
const router = express();
const operationController = require("../controller/gestionController.js");

router.get("/", operationController.list);
router.get("/adduser", operationController.adduser);
router.get("/attribuer", operationController.attribuer);
router.get("/cancel/:id", operationController.cancel);
router.post("/add", operationController.add);
router.post("/ordi/attribuer", operationController.ordiset);
module.exports = router;
