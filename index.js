var express = require("express");

//set up App
var app = express();

var server = app.listen(4000, () => {
  console.log("listening on 4000.");
});
