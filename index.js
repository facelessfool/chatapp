var express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running at ${PORT}`));

//to serve static files such as images, CSS files and js files.
//express.static built in middleware function in express
app.use(express.static("public"));
// Socket setup

io.on("connection", function (socket) {
  console.log("Made socket connection");
});
