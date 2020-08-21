//connecting
//socket on front end
var socket = io.connect("http://localhost:4000");
var msg = document.getElementById("msg");
var userid = document.getElementById("uid");
var output = document.getElementById("output");
var btn = document.getElementById("send");

btn.addEventListener("click", () => {
  //send through socket
  //this will emit msg down the websocket to the server
  socket.emit("chat", {
    message: msg.value,
    userid: userid.value,
  });
});

//listen to events

socket.on("chat", (data) => {
  output.innerHTML += data.userid + " :   " + data.message;
});