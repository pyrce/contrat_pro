const controller = {}


var client = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"
var bp = require('body-parser');
var ObjectId = require('mongodb').ObjectID;
controller.list = (req, res) => {

  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async function (err, db) {
    if (err) throw err;
    var dbo = db.db("operations");
    const arr = await dbo.collection("operation").aggregate([{
      $lookup: {
        from: 'types',
        localField: 'type_id',
        foreignField: '_id',
        as: "type"
      }
    }]).toArray();

    res.render("liste", {
      "liste": arr
    });

  });





};
controller.ajout = (req, res) => {
  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err, client) => {
    const db = client.db('operations')
    const collection2 = db.collection("types");

    var type = await collection2.find({}).toArray();

    res.render("ajout", {
      types: type
    });
  });
}
controller.add = (req, res) => {
  var a = req.body.nombre1;
  var b = req.body.nombre2;
  //var type = req.body.type;

  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err, client) => {
    const db = client.db('operations')
    const collection = db.collection('operation');
    const collection2 = db.collection("types");

    var type = await collection2.findOne({
      "libelle": req.body.type
    });
    console.log(type);
    collection.insertOne({
      nombre1: a,
      nombre2: b,
      type_id: type._id,
      resultat: 0,
      actif: 1
    });
    res.redirect("/");
  });
}



controller.calculate = (req, res) => {
  var id = req.params.id;

  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async function (err, client) {
    const db = client.db('operations');
    const collection = db.collection('operation');
    const typecollection = db.collection('types');

    var data = await collection.findOne({
      _id: new ObjectId(id)
    });
  var typetext=await typecollection.findOne({_id:data.type_id});
    
    var a = Number(data.nombre1);
    var b = Number(data.nombre2);
    var type = typetext.libelle;
 
    var result = 0;
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

    //console.log("a "+a+", b"+b+" res "+result);
    collection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        resultat: result
      }
    });
    res.redirect("/");
  });

}


controller.modifier = (req, res) => {
  var a = req.body.nombre1;
  var b = req.body.nombre2;
  var type = req.body.type;
  var id = req.params.id;

  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async (err, client) => {

    const db = client.db('operations')
    const collection = db.collection('operation');
    const typescollection = db.collection('types');

    var data = await collection.findOne({
      _id: new ObjectId(id)
    });
    var types = await typescollection.find({}).toArray();


    res.render("edit", {
      operation: data,
      types: types
    });
  });
}


controller.update = (req, res) => {


  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async function (err, client) {
    const db = client.db('operations');
    const collection = db.collection('operation');
    const collection2 = db.collection("types");


    var operation = await collection2.findOne({
      "libelle": req.body.type
    });

    console.log("operation"+operation);
    var id = req.body.id;
    var a = req.body.nombre1;
    var b = req.body.nombre2;
    var typeid = operation._id;

    //console.log("a "+a+", b"+b+" res "+result);
    collection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        nombre1: a,
        nombre2: b,
        type_id: new ObjectId(typeid)
      }
    });
    res.redirect("/");
  });
}

controller.desactiver = (req, res) => {
  var id = req.params.id;
  client.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async function (err, client) {
    const db = client.db('operations');
    const collection = db.collection('operation');

    //console.log("a "+a+", b"+b+" res "+result);
    collection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        actif: 0
      }
    });
    res.redirect("/");
  });
}
module.exports = controller;