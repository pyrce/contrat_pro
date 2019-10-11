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
      socket.broadcast.emit(pseudo+" a rejoint le chat");
  });
  
  socket.on('message', function (message) {
    socket.broadcast.emit("text",pseudo+" : "+message);
  
});	
});

// starting the server
server.listen(3000);

