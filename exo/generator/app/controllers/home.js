var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
const users=require('../models/home');
const clients=require('../models/clients');
const mongoose=require("mongoose");
const moment=require("moment");

var mongoDB = 'mongodb://localhost:27017/express';
var ObjectId=mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {

		res.redirect('/login');

	}

}

exports.home = async function(req, res) {
user=await users.findOne({_id:req.session.user._id}).populate("role_id");
	
if(user.role_id.name=="admin")
{
	allclients=await clients.find({});
	res.render('index', {
		title:"test",
		clients:allclients,
		moment:moment,
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	}else{
		res.render("visiteur");
	}
	 
}
exports.detail=async function(req, res){

	user = await clients.findOne({_id:req.params.id});
	res.render("detail",{user:user,moment:moment});
}

exports.signup = function(req, res) {

	if (req.session.user) {

		res.redirect('/home');

	} else {
		res.render('signup', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});
	}

}
exports.ajout=function(req, res){
	res.render("formulaire");
}

exports.add=async function(req, res){
	
    file = req.files.photo;
    path = "upload/" + file.name;
    file.mv(path);
    newuser = clients({
        _id: new ObjectId(),
        nom: req.body.nom,
        prenom: req.body.prenom,
        ville: req.body.ville,
        dateNaissance: req.body.dateNaissance,
        genre: req.body.genre,
        photo: file.name,
        datechoisi: moment().subtract(7, 'days'),
        domaine: req.body.domaine,
        selectionnner: 0,
        choisi: 0,
    })
    newuser.save();
    res.redirect("/");

}

exports.login = function(req, res) {

	if (req.session.user) {

		res.redirect('/index');

	} else {

		res.render('login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}

exports.random = async (req, res) => {
	var   tmpuser = await clients.findOne({
		   choisi: 1
	   });
	   alluser = await clients.find({});
	   var user;
	   choisi = true;
	   var today = Date.now();
   
	   if (!tmpuser) {
		   let r = Math.floor(Math.random() * alluser.length);
		   user = alluser[r];
		   user.dateChoisi = today;
		   user.choisi = 1;
		   user.save();
		   res.render("random", {
			   user: user,
			   moment: moment
		   });
	   } else {
		   dif = ((today - tmpuser.dateChoisi) / 1000) / 3600;
   
		   if (dif >= 24) {
			   let r = Math.floor(Math.random() * alluser.length);
			   user = alluser[r];
	
			   user.dateChoisi = today;
			   user.choisi = 1;
			   user.save();
			   tmpuser.choisi = 0;
			   tmpuser.save();
			   res.render("random", {
				   user: user,
				   moment: moment
			   });
		   }
	   }
   
	   res.render("random", {
		   user: tmpuser,
		   moment: moment
	   });
   
   }

    
