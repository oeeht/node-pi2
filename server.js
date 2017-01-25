// require the dependencies
var express = require('express');
var app = express();
var port = 8080;

//route the app
var router = require('./app/routes.js');
app.use('/', router);

// set static files (css, img, ...) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('Listening on port 8080');
});
