
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var ObjectId=mongoose.Types.ObjectId;
//define the schema for our user model
var historiqueSchema = mongoose.Schema({	
	_id:{ type: ObjectId },
    client_id: ObjectId,
    date:Date
},{collection:"historique"});


module.exports = mongoose.model('historique', historiqueSchema);