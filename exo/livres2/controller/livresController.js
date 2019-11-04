const controller={}
const mongoose=require("mongoose");
const livre=require("../model/livre");
const genre=require("../model/genre");
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/livres_db';
var ObjectId=mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

controller.list=async(req,res)=>{
    var data=await livre.find({}).populate("genre_id");
console.log(data);

    res.render("liste",{data:data});
}

controller.ajout=async(req,res)=>{
    var type=await genre.find({});
    res.render("ajout",{genre:type});
}
controller.addgenre=async(req,res)=>{
var type=await genre.find({});
//var genre=[{_id:14,nom:"comedie"}];
    res.render("addgenre",{genre:type});
}

controller.add= async(req,res)=>{
    titre=req.body.titre;
    auteur=req.body.auteur;
    prix=req.body.prix;
    description=req.body.description;
tmplivre=livre({
    _id:new ObjectId(),
    titre:titre,
    description:description,
    auteur:auteur,
    prix:prix,
    genre_id:req.body.genre
});
tmplivre.save();
    res.redirect("/");
}

controller.updategenre= (req,res)=>{

tmplivre=genre({
    _id:new ObjectId(),
    nom:req.body.genre,
    couleur:req.body.couleur
});
tmplivre.save();
    res.redirect("/addgenre");

}


module.exports = controller;