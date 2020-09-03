//connecting
//socket on front end
var socket = io.connect("http://localhost:4000");
var msg = document.getElementById("msg");
var userid = document.getElementById("uid");
var output = document.getElementById("output");
var btn = document.getElementById("send");
var feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
  //send through socket
  //this will emit msg down the websocket to the server
  socket.emit("chat", {
    message: msg.value,
    userid: userid.value,
  });
});

msg.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    // alert("key pressed!");
    socket.emit("chat", {
      message: msg.value,
      userid: userid.value,
    });
  }
});

msg.addEventListener("keypress", () => {
  socket.emit("typing", userid.value);
});

//listen to events

socket.on("chat", (data) => {
  output.innerHTML += data.userid + " :    " + data.message;
});

socket.on("typing", (data_1) => {
  console.log("data for userid : ", data_1);
  feedback.innerHTML = data_1 + " is typing...";
});

function appendMessage() {
  const message = document.getElementsByClassName("message")[0];
  const newMessage = message.cloneNode(true);
  messages.appendChild(newMessage);
}

function getMessages() {
  // Prior to getting your messages.
  shouldScroll =
    messages.scrollTop + messages.clientHeight === messages.scrollHeight;
  /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your messages.
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

scrollToBottom();

setInterval(getMessages, 100);
