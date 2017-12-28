var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var BlogPost = require('../models/blogPost')

router.get('/posts/sticky', function(req, res){
    BlogPost.find({sticky: true}, function(err, foundPosts){
        if (err)
            res.send({success: false, message: err});
        else
        {
            if(foundPosts.length < 1)
                res.send({success: false, message: "No stickied blog posts were found."});
            else
                res.send({success: true, data: foundPosts});
        }
    });
});

router.get('/posts/recent', function(req, res){
    BlogPost.find({sticky: false}, function(err, foundPosts){
        if (err)
            res.send({success: false, message: err});
        else
        {
            if(foundPosts.length < 1)
                res.send({success: false, message: "No recent blog posts were found."});
            else
                res.send({success: true, data: foundPosts});
        }
    });
});

router.get('/post/:postID', function(req, res){
    BlogPost.findById(req.params.postID, function(err, foundPost) {
        if (err)
            res.send({success: false, message: err});
        else if (foundPost == null)
            res.send({success: false, message: "No post with id " + req.params.postID + " found"})
        else
            res.send({success: true, data: foundPost});
    });
});

router.post('/post/new', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    //var postJSON = JSON.parse(req.body.post);
    var blogPost = new BlogPost
    ({
        title: req.body.title,
        body: req.body.body,
        sticky: req.body.sticky,
        tags: req.body.tags,
        authorId: req.user._id
    });

    blogPost.save(function(err) {
        if (err) {
            res.send({ success: false, message: err });
        }
        else
            res.send({ success: true, message: 'Successfully created new blog post.' });
    });
});

router.delete('/post/:postID', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    BlogPost.findById(req.params.postID, function(err, foundPost) 
    {
        if (err)
            res.send({success: false, message: err.message});
        else if(foundPost == null)
            res.send({success: false, message: "No post with id " + req.params.postID + " found"})
        else
        {
            foundPost.remove(function(err) 
            {
                if (err) {
                    res.send({ success: false, message: err.message });
                }
                else {
                    res.send({ success: true, message: 'Deleted post.' });
                }
            });
        }
    });
});

router.post('/post/:postID/edit', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    BlogPost.findById(req.params.postID, function(err, foundPost) 
    {
        if (err)
            res.send({success: false, message: err.message});
        else if(foundPost == null)
            res.send({success: false, message: "No post with id " + req.params.postID + " found"})
        else
        {
            foundPost.title = req.body.title;
            foundPost.body = req.body.body;
            foundPost.sticky = req.body.sticky,
            foundPost.tags = req.body.tags,
            foundPost.lastEdited = Date.now();

            foundPost.save(function(err) {
                if (err) {
                    res.send({ success: false, message: err.message });
                } 
                else {
                    res.send({ success: true, message: 'Successfully updated post.' });
                }
            });
        }
    });
});

module.exports = router;