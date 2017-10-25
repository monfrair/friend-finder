// setting up the dependencies for the app//

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var hbs =require('hbs');
var fs = ('fs');


//create and express server and set up the port
var port = process.env.Port || 3000;
var app = express();


////set up handlebars partials
//hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
//app.set('view engine', 'html');
//app.engine('html', require('ejs').renderFile);

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
   
   
 next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use(express.static(__dirname + './public'));


// friend finder page
app.get('/', function (req, res) {
    res.render('friendfinder.hbs', {
        pageTitle: 'Friend Finder',
        welcomeMessage: 'Find your new best friend'
    });
});

app.get('/survey', function (req, res) {
    res.render('survey.hbs', {
        pageTitle: 'About Page',

    });
});

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));



//Router

//app.get('/views/routing/api-routes.js');
//app.get('/app/routing/html-routes.js');

require('/views/routing/api-routes.js')(app);
require('/app/routing/html-routes.js')(app);



//console.log(error);







app.listen(port, function() {
    console.log(`Server is up on port ${port}`);
    
});