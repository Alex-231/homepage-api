import express from 'express'
import passport from 'passport'

const userRoutes = express.Router()

userRoutes.get('/', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (!user || err) {
      res.send({success: false, message: 'An unexpected error occured.'})
    } else {
      res.send({success: true,
        user: {
          _id: user._uid,
          created: user.created,
          username: user.username,
          email: user.email
        }})
    }
  })(req, res, next)
})

export default userRoutes
