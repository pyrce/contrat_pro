const controller = {};
const fs = require("fs");

/**recupere la lsite des tuilisateurs et renvoie les donnes dans la vue
 * @version 1.0
 */
controller.liste = (req, res) => {
  fs.readFile("users.json", "utf8", (err, file) => {
    if (err) console.log(err);
    data = JSON.parse(file);

    res.render("liste", { data: data, msg: req.flash("error") });
  });
};
/**recupere les infos d'un utilisateur
 *  @version 1.0
 */
controller.getinfo = (req, res) => {
  fs.readFile("users.json", "utf8", (err, file) => {
    if (err) console.log(err);
    data = JSON.parse(file).filter(x => {
      return x.id == req.params.id;
    });

    if (data.length > 0) {
      req.flash("error", "");
      res.send(data[0].model);
    } else {
      req.flash("error", "Aucunes voitures");
      res.redirect("/");
    }
  });
};

controller.getfiche = (req, res) => {
  fs.readFile("users.json", "utf8", (err, file) => {
    if (err) console.log(err);

    datas = JSON.parse(file).filter(x => {
      return x.id == req.body.marque;
    });

    data = datas[0].model.filter(y => {
      return y.id == req.body.model;
    });

    if (data.length > 0) {
      req.flash("error", "");
      res.send(data[0]);
    } else {
      req.flash("error", "Aucunes voitures");
      res.redirect("/");
    }
  });
};

module.exports = controller;
