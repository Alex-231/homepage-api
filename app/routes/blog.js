var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var BlogPost = require('../models/blogPost')

router.get('/posts/drafts', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    BlogPost.find({draft: true}, function(err, foundPosts){
        if (err)
            res.send({success: false, message: err});
        else
        {
            if(foundPosts.length < 1)
                res.send({success: true, data: []});
            else
                res.send({success: true, data: foundPosts});
        }
    });
})

router.get('/posts/sticky', function(req, res){
    BlogPost.find({sticky: true, draft: {$ne: true}}, function(err, foundPosts){
        if (err)
            res.send({success: false, message: err});
        else
        {
            if(foundPosts.length < 1)
                res.send({success: true, data: []});
            else
                res.send({success: true, data: foundPosts});
        }
    });
});

// router.get('/posts/recent', function(req, res){
//     BlogPost.find({sticky: false}, function(err, foundPosts){
//         if (err)
//             res.send({success: false, message: err});
//         else
//         {
//             if(foundPosts.length < 1)
//                 res.send({success: false, message: "No recent blog posts were found."});
//             else
//                 res.send({success: true, data: foundPosts});
//         }
//     });
// });

// function censor(censor) {
//     var i = 0;
  
//     return function(key, value) {
//       if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
//         return '[Circular]'; 
  
//       if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
//         return '[Unknown]';
  
//       ++i; // so we know we aren't using the original object anymore
  
//       return value;  
//     }
//   }

router.get('/posts/recent', function(req, res){
    BlogPost.find({sticky: {$ne: true}, draft: {$ne: true}}).sort([["created",-1]]).skip(parseInt(req.query.at)).limit(parseInt(req.query.count)).exec(function(err, foundPosts){
        if (err){
            console.log(err);
            res.send({success: false, message: err});
        }
        else
            if(foundPosts.length < 1)
                res.send({success: true, data: []});
            else
                res.send({success: true, data: foundPosts});
    });
    //res.send({success: true, data: JSON.stringify(foundPosts, censor(foundPosts))});
})

router.post('/post/new', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    //var postJSON = JSON.parse(req.body.post);
    var blogPost = new BlogPost
    ({
        title: req.body.title,
        body: req.body.body,
        sticky: req.body.sticky,
        draft: req.body.draft,
        tags: req.body.tags,
        authorId: req.user._id
    });

    blogPost.save(function(err) {
        if (err) {
            res.send({ success: false, message: err.message });
        }
        else
            res.send({ success: true, message: 'Successfully created new blog post.', data: blogPost._id});
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
            foundPost.remove(function(err) 
            {
                if (err)
                    res.send({ success: false, message: err.message });
                else
                    res.send({ success: true, message: 'Deleted post.' });
            });
    });
});

router.get('/post/:postID', function(req, res, next)
{
    passport.authenticate('jwt', { session: false }, function(err, user, info)
    {
        BlogPost.findById(req.params.postID, function(err, foundPost) {
            if (err)
                res.send({success: false, message: err});
            else if (foundPost == null)
                res.send({success: false, message: "No post with id " + req.params.postID + " found"})
            else
                if(!user && foundPost.draft)
                    res.send({success: false, message: "Draft post " + req.params.postID + " requires authentication"})
                else
                    res.send({success: true, data: foundPost});
        });
    })(req, res, next);
})

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
            foundPost.draft = req.body.draft,
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