var express = require("express");
var socket = require("socket.io");

// console.log("inside socket.io : ", socket);
//set up App
var app = express();

var server = app.listen(4000, () => {
  console.log("listening on 4000.");
});

// //Static files
//to send a msg
const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});
io.on('connect', socket => {
  socket.on('hey', data => {
    console.log('hey', data);
  });
});


const socket = io('ws://localhost:3000');

socket.on('connect', () => {
  // either with send()
  socket.send('Hello!');

  // or with emit() and custom event names
  socket.emit('salutations', 'Hello!', { 'mr': 'john' }, Uint8Array.from([1, 2, 3, 4]));
});

// handle the event sent with socket.send()
socket.on('message', data => {
  console.log(data);
});



app.use(express.static("public"));

//Socket
var io = socket(server);
io.on("connection", (socket) => {
  //   console.log("socket instance: ", socket_instance);
  console.log("connection fired from socket!", socket.id);
  //socket refers to the particular socket between the server and the client
  socket.on("chat", (data) => {
    //broadcast the msg to all the sockets connected to the server
    console.log("data", data);
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    console.log("FROM INDEX JS : ", data);
    socket.broadcast.emit("typing", data);
  });
  
   socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })
});
