
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var ObjectId=mongoose.Types.ObjectId;
//define the schema for our user model
var clientSchema = mongoose.Schema({	
	_id:{ type: ObjectId },
	name: String,
    ville: String,
    domaine:String,
    photo:String,
    genre:String,
    dateNaissance:Date,
    choisi:Boolean,
    dateChoisi:Date,
},{collection:"clients"});


module.exports = mongoose.model('clients', clientSchema);