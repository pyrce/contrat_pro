const express = require('express');
const bodyParser = require('body-parser');
var fileupload = require('express-fileupload');
const app = express();
const fs=require('fs');
var http = require("http").Server(app);
const mongoose=require("mongoose");
var io = require("socket.io").listen(http);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
app.use(express.static(__dirname));
const article=require("./model/article");

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/articles';
var ObjectId=mongoose.Types.ObjectId;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,useUnifiedTopology: true
});
// importing routes
const livreRoutes = require('./route/router');
app.use("/",livreRoutes)

app.use('/upload', express.static(__dirname + '/upload'));
// settings

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get("/promo/:id",(req, res) => {
  article.findOne({_id:req.params.id}).then( (article)=>{
    io.emit('news', article);
  //  res.render("detail",{article:article})
  });
})

io.on("connection", (socket) =>{
  console.log("a user is connected");

  socket.on("new_article",function(data){ 

    io.emit("notif",{new:data.img});
    
  } )


 });



// starting the server
http.listen(3000, () => {
  console.log("server is running on port 3000");
 });