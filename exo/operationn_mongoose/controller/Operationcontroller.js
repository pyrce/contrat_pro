const controller = {}

var mongoose = require('mongoose');



//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/calculbdd';
mongoose.connect(mongoDB, { useNewUrlParser: true }).
catch(error => handleError(error));

let ops = require('../models/Operation');
let type = require('../models/type');


type.create({id:1,libelle:"adddition"});

ops.create({
    id:1,
    nombre1:1,nombre2:5,
    type_operation:type.id,
    resultat:0
})

console.log(ops.find());
//Get the default connection
var db = mongoose.connection;

controller.list=(req,res)=>{
    var liste = ops.find();

res.render("liste",{liste,liste});
}


module.exports = controller;