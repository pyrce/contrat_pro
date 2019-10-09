const controller={}

const op=require('./model');
var mysql = require('mysql');
var Sequelize=require('sequelize')
const sequelize = new Sequelize('mysql://root:root@localhost:8889/calcul');



controller.test=(req,res)=>{
op.Operation.findAll().then(users => {
  //on récupère ici un tableau "users" contenant une liste d'utilisateurs
  console.log("--------------------------------------------------------")
  console.log(users);
}).catch(function (e) {
  //gestion erreur
 // console.log(e);
});


}

module.exports = controller;