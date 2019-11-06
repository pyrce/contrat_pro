const express = require('express');
const router=express();
const userController = require('../controller/usersController.js');

router.get('/',userController.list);
router.get("/ajout",userController.ajout);
router.post("/add",userController.add);
router.post("/update/:id",userController.update);
router.get("/random",userController.random);
router.get("/seed",userController.seed);
router.get("/edit/:id",userController.edit);
router.get("/detail/:id",userController.detail);

router.get("/technos",function(req, res){

    res.render("technos")
});
module.exports =router;