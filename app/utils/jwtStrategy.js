import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import passport from 'passport'

import User from '../models/User'
import config from './config'

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
opts.secretOrKey = config.SECRET // That's it, that's it, that's it.

passport.use(new JwtStrategy(opts, function (jwtPayload, done) {
  User.findOne({ username: jwtPayload.data }, function (err, user) {
    if (err) { // If there's an error, return it.
      return done(err, false)
    }
    if (user) { // If there's a user, return it.
      done(null, user)
    } else { // If there's no user, return false.
      done(null, false)
    }
  })
}))
