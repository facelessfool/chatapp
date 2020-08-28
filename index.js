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

io.on('connect', socket => {
  socket.on('hey', data => {
    console.log('hey', data);
  });
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
});
