var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId=mongoose.Types.ObjectId;
var usersSchema = Schema({
    _id: {
        type: ObjectId,
        required: true,
        autoIncrement: true
    },
    nom: String,
    prenom: String,
    dateNaissance:Date,
    domaine:String,
    photo:String,
    ville: String,
    choisi:Boolean,
    role:{type:String,default:"user"},
    dateChoisi:Date,
    genre:String
    
},{collection:"users"});
module.exports = mongoose.model('users', usersSchema);