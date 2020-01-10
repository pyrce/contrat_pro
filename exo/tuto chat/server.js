var express = require("express");
var mongoose = require("mongoose");
var app = express(); 
var bodyParser = require("body-parser")


var dbUrl = "mongodb://localhost:27017/simplechat";
//var dbUrl = "mongodb+srv://test:T&st&s974@cluster0-bjxhj.mongodb.net/simplechat?retryWrites=true&w=majority";
var http = require("http").Server(app);
var io = require("socket.io").listen(http);

var Message = mongoose.model("messages",{ name : String, message : String});
/*mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
 })*/

 mongoose.connect(dbUrl,{useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



   app.use(express.static(__dirname));

   app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })

  app.get('/messages/supprimer/:id', (req, res) => {
    Message.findOneAndDelete({_id:req.params.id},(err, messages)=> {
     res.redirect("/")
      //res.send(messages);
    })
  })

  app.get('/messages/edit/:id', (req, res) => {
    Message.findOne({_id:req.params.id},(err, message)=> {
  
      io.emit("edit",message);
      res.redirect("/");
      //res.send(messages);
    })
  })
  app.get('/messages/edit/:id', (req, res) => {
    Message.findOneAndUpdate({_id:req.params.id},{name:req.params.name,message:req.body.message},(err, messages)=> {
     res.redirect("/")
      //res.send(messages);
    })
  })

  app.post('/messages', (req, res) => {
 
    var message = new Message(req.body);

    
    message.save((err) =>{
      if(err){
        sendStatus(500);}
  
        io.emit('message', req.body);
      res.sendStatus(200);
    })
  })

io.on("connection", () =>{
  console.log("a user is connected")
 })
http.listen(3001, () => {
    console.log("server is running on port 3000");
   });