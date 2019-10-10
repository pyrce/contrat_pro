const controller = {}

const opModel=require('../models/Operation');
var op=opModel.Operation;
var mysql = require('mysql');
var Sequelize=require('sequelize')
const sequelize = new Sequelize('mysql://root:root@localhost:8889/calcul');

controller.list = (req, res) => {
    op.findAll().then(listes => {

        //on récupère ici un tableu "users" contenant une liste d'utilisateurs
           res.render("liste", {
        liste:
        listes
    });
      }).catch(function (e) {
        //gestion erreur
        console.log(e);
      });


}
controller.ajout=(req,res)=>{
    res.render("ajout");
}


controller.add=(req,res)=>{
    var a=req.body.nombre1;
    var b=req.body.nombre2;
    var type=req.body.type;
    op.create({nombre1:a,nombre2:b,type:type,resultat:0,actif:1}).then(listes => {
        //on récupère ici un tableu "users" contenant une liste d'utilisateurs
console.log("operation crée");
           res.redirect("/");
      }).catch(function (e) {
        //gestion erreur
        console.log(e);
      });
    res.redirect("/");
}

controller.calcul= async(req, res) => {
var id=req.params.id;
op.findOne({where: {id:id}}).then(data => {

var a=Number(data.nombre1);
var b=Number(data.nombre2);
var type=data.type;
switch (type) {
    case "addition":
      result = a + b;
      break;
    case "mutliplication":
      result = a * b;
      break;
    case "soustraction":
      result = a - b;
      break;
    case "division":
      result = a / b;
      break;
  }

op.update({resultat:result},{where:{id:id}});
  res.redirect("/");
});

}

controller.edit= async(req, res) => {
    var id =req.params.id;
   var data=await op.findOne({where: {id:id}});
    res.render("edit",{operation:data});
}
controller.update= async (req, res) => {
 var id=req.body.id;

    var n1=req.body.nombre1;
    var n2=req.body.nombre2;
    var type=req.body.type;
   await op.update({nombre1:n1,nombre2:n2,type:type,resultat:0},{where:{id:id}});

res.redirect("/")
}
controller.desactiver=async (req, res)=>{
    var id=req.params.id;
    var data= await op.findOne({id:id});

    op.update({actif:0},{where:{id:id}});
    res.redirect("/");
}
module.exports = controller;