var express = require("express");
var socket = require("socket.io");

// console.log("inside socket.io : ", socket);
//set up App
var app = express();

var server = app.listen(4000, () => {
  console.log("listening on 4000.");
});

// //Static files

app.use(express.static("public"));

//Socket
var io = socket(server);
io.on("connection", (socket_instance) => {
  //   console.log("socket instance: ", socket_instance);
  console.log("connection fired from socket!", socket_instance.id);
  //socket refers to the particular socket between the server and the client
  socket_instance.on("chat", (data) => {
    //broadcast the msg to all the sockets connected to the server
    console.log("data", data);
    io.sockets.emit("chat", data);
  });
});
