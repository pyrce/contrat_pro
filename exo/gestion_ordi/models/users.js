var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const roles = Schema(
  {
    _id: { type: ObjectId },
    nom: String,
    prenom: String,
    role_id: { type: ObjectId, ref: "roles" }
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", roles);
