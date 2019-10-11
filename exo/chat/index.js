const express = require('express');
var http = require('http');
var fs = require('fs');
const ejs=require('ejs');

const app = express();

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
 
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('petit_nouveau', function(pseudo) {
      socket.pseudo = pseudo;
  
      io.sockets.emit("new",socket.pseudo+" a rejoint le chat");
  });
  
  socket.on('message', function (message) {
  
    io.sockets.emit("text",socket.pseudo+" : "+message);
  
});	
});

// starting the server
server.listen(3000);

