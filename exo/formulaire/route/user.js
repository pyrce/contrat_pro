const express = require('express');
const router=express();
const userController = require('../controller/usersController.js');

router.get('/',userController.list);
router.get("/ajout",userController.ajout);
router.post("/add",userController.add);

module.exports =router;