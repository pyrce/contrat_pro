var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
const users=require('../models/home');
const clients=require('../models/clients');
const roles=require('../models/roles');
const mongoose=require("mongoose");
const moment=require("moment");
const url = require('url');  
const fs = require('fs');  
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
//user=await users.findOne({_id:req.session.user._id}).populate("role_id");

currentpage=(typeof req.param('page')!="undefined" || req.param('page')>0) ? req.param('page') : 0

var perPage = 10
  , page = Math.max(0, currentpage);
	

	 clients.find({}).limit(perPage)
	 .skip(perPage * page).lean().exec(function(err, allclients) {


clients.count().exec(function(err, count) {

	res.render('index2', {
		title:"test",
		clients:allclients,
		moment:moment,
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
		page: page+1,
    pages: count/perPage,
	
	 });
});
	});

	 
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
	ext=["jpg","png","jpeg"];

	if(ext.indexOf(req.files.photo.name)>=0 ){

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
	}else{


	res.render("formulaire",{data:req.body,erreur:"format onm valide (jpg, jpeg,png)"});
	
	}
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
function randomDate() {
	var start=new Date(1975,1,1);
	var end=new Date(2005,12,31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
exports.seed=async(req,res)=>{

await clients.deleteMany({});
var files=
fs.readdirSync("upload");

	for(let i=0;i<100000;i++){
	var img=files[Math.floor(Math.random() * files.length)];
	new_user=clients();
	new_user._id=new ObjectId();
	new_user.name="user_"+i;
	new_user.prenom="user_"+i;
	new_user.domaine="domain_"+i;
	new_user.ville="ville_"+i;
	new_user.photo=img;
	new_user.dateNaissance=randomDate();
	new_user.save();
	}
	res.redirect("/");
}

exports.random = async (req, res) => {

	var start = moment().startOf('day'); // set to 12:00 am today
var end = moment().endOf('day'); 

	clients.find({ dateChoisi:{$gte: start, $lt: end} }).lean().exec(function(err, current_client) {

		//affiche le tirage du jour
if( new Date(current_client[0].dateChoisi).getDate()==new Date().getDate()  ){

	res.render("random",{user:current_client[0],moment:moment});

}else{

if(allclients.length==0){ 	clients.updateMany({},{$set:{dateChoisi:null}}); }
//choisi au hazard une personne qui n'a pas de date choisi
	clients.aggregate([
		{
		  '$match': {
			'dateChoisi': null
		  }
		}, {
		  '$sample': {
			'size': 1
		  }
		}
	  ],async function(err,client){

		tmpusre=await clients.findOne({_id:client[0]._id});
		tmpusre.dateChoisi=new Date();
		tmpusre.save();
//	clients.updateOne({_id:client[0]._id},{ $set:{ dateChoisi:new Date() }});
	res.render("random",{user:client[0],moment:moment});

} );

}
})


   
}