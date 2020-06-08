var express = require("express");
var square = require("./square");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log(square.area(4));
});

app.listen(3000, function () {
  console.log("Example App Listening on 3000!");
});
