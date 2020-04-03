const express = require("express");
const router = express();
const operationController = require("../controller/livresController.js");

router.get("/", operationController.liste);
router.get("/getinfo/:id", operationController.getinfo);

module.exports = router;
