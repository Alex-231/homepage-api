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
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

    if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
        var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
            mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
            mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
            mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
            mongoPassword = process.env[mongoServiceName + '_PASSWORD']
            mongoUser = process.env[mongoServiceName + '_USER'];
      
        if (mongoHost && mongoPort && mongoDatabase) {
          mongoURLLabel = mongoURL = 'mongodb://';
          if (mongoUser && mongoPassword) {
            mongoURL += mongoUser + ':' + mongoPassword + '@';
          }
          // Provide UI label that excludes user id and pw
          mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
          mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
      
        }
      }

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
mongoose.connect(mongoURL, {useMongoClient: true});

//front end routes
app.use("", express.static('./app/front/index.html'));
app.use("/index.html", express.static('./app/front/index.html'));
app.use("/manifest.json", express.static('./app/front/manifest.json'));
app.use("/asset-manifest.json", express.static('./app/front/asset-manifest.json'));
app.use("/service-worker.js", express.static('./app/front/service-worker.js'))
app.use("/static", express.static("./app/front/static"));

//Require routes.
require('./app/routes/main')(app);
app.use('/static', express.static('./app/static'));


app.listen(port, ip);
console.log('Server running on localhost:' + port);