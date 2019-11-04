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
    selectionnner:Boolean,
    dateChoisi:Date,
    genre:String
    
},{collection:"users"});
module.exports = mongoose.model('users', usersSchema);