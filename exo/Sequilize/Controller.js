const controller={}

const op=require('./model');
var mysql = require('mysql');




controller.test=(req,res)=>{
sql=op.findAll();

 
  console.log("All users:", JSON.stringify(sql, null, 4));
res.render("view",{liste:sql})
}

module.exports = controller;