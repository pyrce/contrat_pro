const controller = {};
const fs = require("fs");
var flash = require("express-flash");
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
      res.send(data);
    } else {
      req.flash("error", "Aucun utilisateurs");
      res.redirect("/");
    }
  });
};

module.exports = controller;
