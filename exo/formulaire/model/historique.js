var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId=mongoose.Types.ObjectId;
var usersSchema = Schema({
    _id: {
        type: ObjectId,
        required: true,
    },
    date: Date,
    
},{collection:"historique"});
module.exports = mongoose.model('historique', usersSchema);