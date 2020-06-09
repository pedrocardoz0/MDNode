var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Wiki Home");
});

router.get("/about", function (req, res) {
  res.send("About This Wiki");
});

module.exports = router;
