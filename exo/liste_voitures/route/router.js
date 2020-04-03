const express = require("express");
const router = express();
const operationController = require("../controller/livresController.js");

router.get("/", operationController.liste);
router.get("/getinfo/:id", operationController.getinfo);
router.post("/getfiche", operationController.getfiche);
module.exports = router;
