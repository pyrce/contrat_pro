//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var ObjectId=mongoose.Schema.Types.ObjectId;
//define the schema for our user model
var clientSchema = mongoose.Schema({	
	_id:{ type: ObjectId },
	name: String,
    temp: Number,
    vent:Number,
    icone:String,
    pression:Number,
    temp_min:Number,
    temp_max:Number,
},{collection:"meteo"});


module.exports = mongoose.model('meteo', clientSchema);