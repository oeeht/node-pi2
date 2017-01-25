// require express
var express = require('express');
var path = require('path');

// create the router object
var router = express.Router();

// export the router
module.exports = router;

// route homepage
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// route analyse 1
router.get('/analyse1', function(req, res) {
  res.sendFile(path.join(__dirname, '../analyse1.html'));
});

// route analyse 2
router.get('/analyse2', function(req, res) {
  res.sendFile(path.join(__dirname, '../analyse2.html'));
});

// route analyse 3
router.get('/analyse3', function(req, res) {
  res.sendFile(path.join(__dirname, '../analyse3.html'));
});

// route analyse 4
router.get('/analyse4', function(req, res) {
  res.sendFile(path.join(__dirname, '../analyse4.html'));
});
