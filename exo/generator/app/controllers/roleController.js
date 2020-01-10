
const users=require('../models/home');
const clients=require('../models/clients');
const roles=require('../models/roles');
const mongoose=require("mongoose");

var mongoDB = 'mongodb://localhost:27017/express';
var ObjectId=mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

exports.roles=async function(req, res){

    //user=await users.findOne({_id:req.session.user._id}).populate("role_id");
    
	allclients=await users.find({}).populate("role_id");

	res.render('roles', {
		title:"test",
		users:allclients,
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	
}
exports.role_edit=async function(req, res){

    allclients=await users.find({}).populate("role_id");
    client=await users.findOne({_id:req.params.id});
    allroles=await roles.find({});
    res.render("roles",{tmpuser:client,roles:allroles,users:allclients});

}

exports.roleupdate=async function(req, res){
user=await users.findOne({_id:req.params.id});
user.role_id=req.body.role;
user.save();
 //  users.findOneAndUpdate({_id:req.params.id},{$set:{role_id:ObjectId(req.body.role)}});
    res.redirect("/roles");

}