var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const roles = Schema(
  {
    _id: { type: ObjectId },
    nom: String
  },
  { collection: "roles" }
);

module.exports = mongoose.model("roles", roles);
