const express = require("express");
const path = require("path");
// morgan = require('morgan'),
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser());
app.engine("html", ejs.renderFile);
// importing routes
const operationRoutes = require("./routes/gestion");

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
app.use("/", operationRoutes);

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
