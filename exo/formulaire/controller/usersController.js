const controller={}
const mongoose=require("mongoose");
const users=require("../model/users");
var ObjectId=mongoose.Types.ObjectId;
var mongoDB = 'mongodb://localhost:27017/formulaire';
var moment = require('moment');
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

controller.list=async (req,res)=>{
user=await users.find({});

res.render('liste',{users:user,moment:moment});
}

controller.ajout=(req,res)=>{
    res.render('formulaire');

}

controller.add=async (req,res)=>{

newuser=users({
    _id:new ObjectId(),
    nom:req.body.nom,
    prenom:req.body.prenom,
    ville:req.body.ville,
    dateNaissance:req.body.dateNaissance,
    genre:req.body.genre,
    datechoisi:null,
    domaine:req.body.domaine,
    selectionnner:0,
})
newuser.save();
res.redirect("/");
}

module.exports = controller;