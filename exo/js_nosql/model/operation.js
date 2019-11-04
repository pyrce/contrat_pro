var mongoose = require('mongoose'), Schema = mongoose.Schema;
var mongoDB = 'mongodb://localhost:8889/calculbdd';
//mongoose.connect(mongoDB, { useNewUrlParser: true });
var ObjectId=mongoose.Schema.Types.ObjectId;
var operationSchema = Schema({
    id    : {type:Number,required:true },
    nombre1 : Number,
    nombre2 : Number,
    type_operation:Number,
    operateur : String,
    resultat: Number
  });
  module.exports = mongoose.model('operation', operationSchema);