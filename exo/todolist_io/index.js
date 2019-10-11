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
var liste=[{text:"un"},{text:"deux"},{text:"trois"}];
io.sockets.on('connection', function (socket) {
    socket.emit("liste",liste);

  
  socket.on('message', function (message) {
    liste.push({text:message});
    io.sockets.emit("new_liste",message);
});	

socket.on('supprimer', function (item) {
    console.log(item);
    liste.splice(item,1);
   io.sockets.emit("refresh",liste);
});	

});

// starting the server
server.listen(3000);

