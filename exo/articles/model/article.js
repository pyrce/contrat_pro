var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;
var articleSchema = Schema({
    _id: {
        type: ObjectId,
        required: true,
    },
    titre: String,
    text:String,
    image:String
},{collection:"article"});
module.exports = mongoose.model('article', articleSchema);