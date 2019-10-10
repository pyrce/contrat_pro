var mongoose = require('mongoose'), Schema = mongoose.Schema;
var mongoDB = 'mongodb://localhost:8889/calculbdd';
//mongoose.connect(mongoDB, { useNewUrlParser: true });
var ObjectId=mongoose.Schema.Types.ObjectId;
var typeSchema = Schema({
    id    : {type:Number,required:true },
    libelle : String
  });
  module.exports = mongoose.model('Type', typeSchema);
  