var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Pedro');
});

routes.get('/cool', function(req, res, next) {
  res.send("You'r Cool")
})

module.exports = router;
