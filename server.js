// setting up the dependencies for the app//

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


//create and express server and set up the port
const port = process.env.Port || 3000;
var app = express();


//set up handlebars partials
hbs.registerPartials(__dirname + '/views/partials');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

//Router
require('/app/routing/api-routes.js')(app);
require('/app/routing/html-routes.js')(app);


