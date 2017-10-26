// setting up the dependencies for the app//

var request = require('request');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs")
//var express = require('express');
//var bodyParser = require('body-parser');
//var path = require('path');
//var hbs =require('hbs');
//var fs = ('fs');


//create and express server and set up the port
var app = express();
var PORT = process.env.PORT || 3000;



//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//app.set('view engine', 'html');

//app.use(express.static('app/public'));



//app.get('/friendfinder', function (req, res) {
//    res.render('friendfinder', {
//        pageTitle: 'Friend Finder',
//        welcomeMessage: 'Find your new best friend'
//    });
//});
//
//app.get('/survey', function (req, res) {
//    res.render('survey.html', {
//        pageTitle: 'About Page',
//
//    });
//});



require("../routing/apiRoutes") (app);
require("../routing/htmlRoutes") (app);




app.listen(PORT, function() {
    console.log(`Server is up on port ${PORT}`);
    
});