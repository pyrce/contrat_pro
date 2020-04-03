var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const roles = Schema(
  {
    _id: { type: ObjectId },
    nom: String,
    user_id: { type: ObjectId, ref: "users" },
    heure_debut: Date,
    heure_fin: Date
  },
  { collection: "ordinateurs" }
);

module.exports = mongoose.model("ordinateurs", roles);
