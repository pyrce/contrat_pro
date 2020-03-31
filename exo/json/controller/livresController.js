const controller = {};
const fs = require("fs");

controller.liste = (req, res) => {
  fs.readFile("users.json", "utf8", (err, file) => {
    if (err) console.log(err);
    data = JSON.parse(file);

    res.render("liste", { data: data });
  });
};

controller.getinfo = (req, res) => {
  fs.readFile("users.json", "utf8", (err, file) => {
    if (err) console.log(err);
    data = JSON.parse(file).filter(x => {
      return x.id == req.params.id;
    });

    res.send(data);
  });
};

module.exports = controller;
