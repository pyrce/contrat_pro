const controller = {}

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/calculbdd';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}).
catch(error => handleError(error));
var mongoose = require('mongoose'),

    Schema = mongoose.Schema;
var ObjectId=mongoose.Types.ObjectId;

var operationSchema = Schema({
    _id: {
        type: ObjectId,
        required: true,
    },
    nombre1: Number,
    nombre2: Number,
    type: String,
    actif:Number,
    resultat: Number
});


var ops = mongoose.model('operation', operationSchema);

var opModel= ops({_id:new ObjectId(),nombre1:1,nombre2:3,type:"addition",resultat:4})

//opModel.save();


controller.list = async(req, res) => {
    var listes = await ops.find({});

    res.render("liste", {
        liste:
        listes
    });
}
controller.ajout=(req,res)=>{
    res.render("ajout");
}


controller.add=(req,res)=>{
var n1=req.body.nombre1;
var n2=req.body.nombre2;
var type=req.body.type;
var resultat=0;
opModel=ops({_id:new ObjectId(),nombre1:n1,nombre2:n2,type:type,resultat:0,actif:1})
opModel.save();
    res.redirect("/");
}

controller.calcul= async(req, res) => {
var id=req.params.id;
var data= await ops.findOne({_id:id});

var a=data.nombre1;
var b=data.nombre2;
var result=0;
var type=data.type;

switch (type) {
    case "addition":
      result = a + b;
      break;
    case "mutliplication":
      result = a * b;
      break;
    case "soustraction":
      result = a - b;
      break;
    case "division":
      result = a / b;
      break;
  }

  data.resultat=result
  data.save();
  res.redirect("/");
}

controller.edit= async(req, res) => {
    var data= await ops.findOne({_id:req.params.id});
    res.render("edit",{operation:data});
}
controller.update= async (req, res) => {
    var data= await ops.findOne({_id:req.body.id});
    var n1=req.body.nombre1;

var n2=req.body.nombre2;
var type=req.body.type;
data.nombre1=n1;
data.nombre2=n2;
data.type=type;
data.resultat=0
data.save();
res.redirect("/")
}
controller.desactiver=async (req, res)=>{
    var id=req.params.id;
    var data= await ops.findOne({_id:id});

    data.actif=0;
    data.save();
    res.redirect("/");
}
module.exports = controller;