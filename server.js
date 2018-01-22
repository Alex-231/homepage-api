//Grab packages
var express = require('express');
var app = express(); 
var mongoose = require('mongoose'); //Mongo Connection
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var config = require('./config/main');
var port = 8080;

//Get POSTS with body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//log requests.
app.use(morgan('dev'));

//Initialize passport.
app.use(passport.initialize());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Authorization");
   //and remove cacheing so we get the most recent comments
    res.setHeader("Cache-Control", "no-cache");
    next();
   });

//Connect to db
mongoose.connect(config.database, {useMongoClient: true});

//Require routes.
require('./app/routes/main')(app);
app.use('/static', express.static('./app/static'))

app.listen(port, 'localhost');
console.log('Server running on localhost:' + port);