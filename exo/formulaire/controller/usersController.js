const controller = {}
const mongoose = require("mongoose");
const users = require("../model/users");

var ObjectId = mongoose.Types.ObjectId;
var mongoDB = 'mongodb://localhost:27017/formulaire';
var moment = require('moment');
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});


function randletter() {
    var nom = "";
    lettres = "abcdefghijklmnopqrstuvwxy";
    n = Math.floor(Math.random() * 10);
    for (let i = 0; i < n; i++) {
        let r = Math.floor(Math.random() * lettres.length);
        nom += lettres[r];
    }
    return nom;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
controller.list = async (req, res) => {

    user = await users.find({});
    res.render('liste', {
        users: user,
        moment: moment
    });
}

controller.seed = async (req, res) => {
    for (let i = 1; i < 10; i++) {
        u = users();
        u._id = new ObjectId();
        u.nom = randletter();
        u.prenom = randletter();
        u.ville = randletter();
        u.domaine = randletter();
        u.dateNaissance = randomDate(new Date(1990, 0, 1), new Date());
        u.choisi = 0;
        u.save();
    }
    res.redirect("/");
}
controller.ajout = (req, res) => {
    res.render('formulaire');

}
controller.edit = async (req, res) => {
    user = await users.findOne({
        _id: req.params.id
    });
    res.render('edit', {
        user: user
    });
}
controller.detail = async (req, res) => {
    current_user = await users.findOne({
        _id: req.params.id
    });
    res.render('detail', {
        user: current_user,
        moment: moment
    });

}

controller.add = async (req, res) => {


    file = req.files.photo;
    path = "upload/" + file.name;
    file.mv(path);
    newuser = users({
        _id: new ObjectId(),
        nom: req.body.nom,
        prenom: req.body.prenom,
        ville: req.body.ville,
        dateNaissance: req.body.dateNaissance,
        genre: req.body.genre,
        photo: file.name,
        datechoisi: moment().subtract(7, 'days'),
        domaine: req.body.domaine,
        selectionnner: 0,
        choisi: 0,
    })
    newuser.save();
    res.redirect("/");
}

controller.random = async (req, res) => {
    tmpuser = await users.findOne({
        choisi: 1
    });
    alluser = await users.find({});
    var user;
    choisi = true;
    var today = Date.now();

    if (!tmpuser) {
        let r = Math.floor(Math.random() * user.length);
        user = alluser[r];
        user.dateChoisi = today;
        user.choisi = 1;
        user.save();
        res.render("random", {
            user: user,
            moment: moment
        });
    } else {
        dif = ((today - tmpuser.dateChoisi) / 1000) / 3600;

        if (dif >= 24) {
            let r = Math.floor(Math.random() * user.length);
            user = alluser[r];
            user.dateChoisi = today;
            user.choisi = 1;
            user.save();
            tmpuser.choisi = 0;
            tmpuser.save();
            res.render("random", {
                user: user,
                moment: moment
            });
        }
    }

    res.render("random", {
        user: tmpuser,
        moment: moment
    });

}

controller.update = async (req, res) => {
    var file;
        user = await users.findOne({
            _id: req.params.id
        });
    if (req.files.photo.name != "") {
        file = req.files.photo;
        path = "upload/" + file.name;
        file.mv(path);


        user.nom = req.body.nom;
        user.prenom = req.body.prenom;
        user.ville = req.body.ville;
        user.domaine = req.body.domaine;
        user.photo = file.name;
        user.dateNaissance = req.body.dateNaissance;
        user.save();

    } else {

        user.nom = req.body.nom;
        user.prenom = req.body.prenom;
        user.ville = req.body.ville;
        user.domaine = req.body.domaine;
        user.dateNaissance = req.body.dateNaissance;
        user.save();
    }
    res.redirect("/");
}
module.exports = controller;