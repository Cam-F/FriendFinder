// NPM modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Heroku port
var PORT = process.env.PORT || 3000;

// Body parser to present JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log('App listening on port: ' + PORT);
});