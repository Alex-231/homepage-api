var express = require('express');
var passport = require('passport');
var config = require('../../config/main');
var BlogPost = require('../models/blogPost')

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

    app.get('/blog/rss.xml', function(req, res){
        BlogPost.find().sort([["created",-1]]).exec(function(err, foundPosts){
      
          var rssRes = 
          "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n" +
          "<rss version=\"2.0\">\r\n" +
          "  <channel>\r\n" +
          "		<title>Alex Newark's Blog</title>\r\n" +
          "		<link>http://alexnewark.co.uk/blog</link>\r\n" +
          "		<description></description>\r\n" +
          "		<language>en-us</language>\r\n" +
          "		<pubDate>" + Date.now().toString(); + "</pubDate>\r\n" +
          "		<lastBuildDate>" + Date.now().toString(); + "</lastBuildDate>\r\n";
      
          var rssClose = 
          "  </channel>\r\n" +
          "</rss>";
          
      
          if (err){
              console.log(err);
              res.send(rssRes + rssClose);
          }
          else
          {
            foundPosts.forEach(blogPost => {
              rssRes += 
              "		<item>\r\n" +
              "			<title>" + blogPost.title + "</title>\r\n" +
              "			<link>http://alexnewark.co.uk/blog/post/" + blogPost._id + "</link>\r\n"
              "     <description></description>\r\n" +
              "			<pubDate>" + blogPost.created + "</pubDate>\r\n" +
              "			<guid isPermaLink=\"true\">http://alexnewark.co.uk/blog/post/" + blogPost._id + "</guid>\r\n" +
              "		</item>";
            });
      
                  res.send(rssRes + rssClose);
          }}
      );
      });
};