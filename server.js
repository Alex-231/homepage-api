//Grab packages
var express = require('express');
var app = express(); 
var mongoose = require('mongoose'); //Mongo Connection
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var config = require('./config/main');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

//Get POSTS with body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//log requests.
app.use(morgan('combined'));

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

app.use("/", express.static('./app/front'));
app.use("/manifest.json", express.static('./app/front/manifest.json'));
app.use("/asset-manifest.json", express.static('./app/front/asset-manifest.json'));
app.use("/service-worker.js", express.static('./app/front/service-worker.js'))
app.use("/static", express.static("./app/front/static"));

//Require routes.
require('./app/routes/main')(app);
app.use('/static', express.static('./app/static'));

// error handling
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
  });

app.use('*', function(req, res){
    res.sendfile('./app/front/index.html');
  });
  

app.listen(port, ip);
console.log("server started on " + ip + ":" + port);