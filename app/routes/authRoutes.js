import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'

import config from '../utils/config'
import User from '../models/User'

const authRoutes = express.Router()

// Authentication Routes

// Register new user.
authRoutes.post('/register', (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter an email and password.' })
  } else if (!req.body.username) {
    res.json({ success: false, message: 'Please enter a Username.' })
  } else {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    // Attempt to save the new user.
    user.save(err => {
      if (err) {
        return res.json({ success: false, message: 'Username or Email Address already exists.' })
      }
      res.json({ success: true, message: 'Successfully created new user.' })
    })
  }
})

// Authenticate the user and get a token (yay!)
authRoutes.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err

    if (!user) {
      res.send({ success: false, message: 'Authentication fail. User not found.' })
    } else {
      // Check if password matches.
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          // Create the token!
          var token = jwt.sign({data: user.username},
            config.SECRET, { expiresIn: '1d' }
          )

          res.json({ success: true, token: 'JWT ' + token })
        } else {
          // Maybe I shouldn't be giving the user this much information.
          res.send({ success: false, message: 'Authentication failed. Passwords did not match' })
        }
      })
    }
  })
})

// Protect dashboard route with jwt,
authRoutes.get('/protected', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), (req, res) => {
  res.send({success: true, message: 'It worked! User id is: ' + req.user._id + '.'})
})

export default authRoutes
