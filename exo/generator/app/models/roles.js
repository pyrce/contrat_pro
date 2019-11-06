
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var ObjectId=mongoose.Types.ObjectId;
//define the schema for our user model
var rolesSchema = mongoose.Schema({	
	_id:{ type: ObjectId },
	name: String,
    description: String
},{collection:"roles"});


//create the model for users and expose it to our app
module.exports = mongoose.model('roles', rolesSchema);