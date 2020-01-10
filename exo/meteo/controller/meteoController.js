const controller = {}
const mongoose = require("mongoose");
const request = require("request")
const moment = require("moment")
var meteo = require('../model/meteo');


var mongoDB = 'mongodb://localhost:27017/meteo';
var ObjectId = mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
controller.list =  async (req, res) => {
 let listes_ville=await  meteo.find({});

  res.render("liste", {listes_ville: listes_ville  });



}

controller.getmeteo =  (req, res) => {
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=16a0937db7fc273dc12939e118d2c252&units=metric"
  url += "&q=" + req.body.ville;
  // console.log(req.body.ville);
  request({
    url: url
  }, async (error, response) => {

    var listes_ville = JSON.parse(response.body)
    if (listes_ville.cod != "404") {
      
      meteo =  new meteo();
      meteo._id = new ObjectId();
      meteo.name=listes_ville.name;
      meteo.icone = listes_ville['weather'][0].icon;
      meteo.temp = listes_ville.main.temp;
      meteo.temp_max = listes_ville.main.temp_max;
      meteo.temp_min = listes_ville.main.temp_min;
      meteo.pression = listes_ville.main.pressure;
      meteo.vent = listes_ville.wind.speed;
      meteo.save();
  
    }
        res.redirect("/");
  });
}

controller.delete =  (req, res) => {
  //var i=  listes_ville.map((e,i) => e.dt==req.params.id ? i : undefined).filter(e => e)[0];

  //listes_ville.splice(i,1);
  //  console.log(listes_ville[0].dt)
  // res.render("liste",{moment:moment,listes_ville:listes_ville})

  meteo.deleteOne({
    _id: req.params.id
  },()=>{res.redirect("/"); });
  
}
module.exports = controller;