var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/main');
var passport = require('passport');

//Authentication Routes

//Register new user.
router.post('/register', function(req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, message: 'Please enter an email and password.' });

    } else if (!req.body.username) {
        res.json({ success: false, message: 'Please enter a Username.' });
    } else {
        var user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        //Attempt to save the new user.
        user.save(function(err) {
            if (err) {
                return res.json({ success: false, message: 'Username or Email Address already exists.' });
            }
            res.json({ success: true, message: 'Successfully created new user.' });
        });
    }
});

//Authenticate the user and get a token (yay!)
router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.send({ success: false, message: 'Authentication fail. User not found.' });
        } else {
            //Check if password matches.
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (isMatch && !err) {
                    //Create the token!
                    var token = jwt.sign({data: user.username}, 
                        config.secret, { expiresIn: '1d'}
                    );

                    res.json({ success: true, token: 'JWT ' + token });
                } else //Password doesn't match
                {
                    //Maybe I shouldn't be giving the user this much information.
                    res.send({ success: false, message: 'Authentication failed. Passwords did not match' });
                }
            });
        }
    });
});

//Protect dashboard route with jwt,
router.get('/protected', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function(req, res) {
    res.send({success: true, message: 'It worked! User id is: ' + req.user._id + '.'});
});

module.exports = router;