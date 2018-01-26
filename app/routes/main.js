var express = require('express');
var passport = require('passport');
var config = require('../../config/main');

module.exports = function(app) {

    //Import passport strat.
    require('../../config/passport')(passport);

    //API routes.
    var apiRoutes = express.Router();

    //Health route for OpenShift monitoring.
    app.get("/health", function(req, res) {
        res.json({ success: true, message: 'success' });
    });

    apiRoutes.get("/errors/unauthorized", function(req, res) {
        res.json({ success: false, message: 'unauthorized' });
    });

    //Set url for API group routes.
    apiRoutes.use('/blog', require('./blog'));
    apiRoutes.use('/auth', require('./auth'));
    //apiRoutes.use('/debug', require('./debug')); //There's probably a variable I can use to enable this.
    app.use('/api', apiRoutes);
};