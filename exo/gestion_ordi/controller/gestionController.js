const controller = {};
var roles = require("../models/roles");
var users = require("../models/users");
var moment = require("moment");
var ordinateurs = require("../models/ordinateurs");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var mongoDB = "mongodb://localhost:27017/gestion_ordi";
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true
  })
  .catch(error => handleError(error));
controller.list = async (req, res) => {
  var ordis = await ordinateurs.find({}).populate("user_id");

  res.render("index", { ordis: ordis, moment: moment });
};

controller.adduser = (req, res) => {
  roles.find({}).then(role => {
    res.render("ajout_utilisateur", { roles: role });
  });
};

controller.add = async (req, res) => {
  var user = new users();
  user._id = new ObjectId();
  user.nom = req.body.nom;
  user.prenom = req.body.prenom;
  user.role_id = req.body.role;
  user.save();
  res.redirect("/");
};

controller.attribuer = (req, res) => {
  users.find({}).then(user => {
    ordinateurs.find({}).then(ordis => {
      res.render("attribuer", { users: user, ordinateurs: ordis });
    });
  });
};

controller.ordiset = async (req, res) => {
  var ordi = await ordinateurs.findOne({ _id: req.body.ordi });
  if (!ordi.user_id) {
    var time1 = req.body.heure_debut.split(":");
    var time2 = req.body.heure_fin.split(":");
    var a = new Date();
    a.setHours(time1[0]);
    a.setMinutes(time1[1]);

    var b = new Date();
    b.setHours(time2[0]);
    b.setMinutes(time2[1]);

    ordi.heure_debut = a;
    ordi.heure_fin = b;

    ordi.user_id = req.body.user;
    ordi.save();
    res.redirect("/");
  } else res.redirect("/");
};

controller.cancel = (req, res) => {
  ordinateurs.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
};

module.exports = controller;
