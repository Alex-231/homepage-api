import express from 'express'
import passport from 'passport'

import BlogPost from '../models/BlogPost'

const blogRoutes = express.Router()

blogRoutes.get('/posts/drafts', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), function (req, res) {
  BlogPost.find({draft: true}, (err, foundPosts) => {
    if (err) {
      res.send({success: false, message: err})
    } else {
      if (foundPosts.length < 1) {
        res.send({success: true, data: []})
      } else {
        res.send({success: true, data: foundPosts})
      }
    }
  })
})

blogRoutes.get('/posts/sticky', (req, res) => {
  BlogPost.find({sticky: true, draft: {$ne: true}}, (err, foundPosts) => {
    if (err) {
      res.send({success: false, message: err})
    } else {
      if (foundPosts.length < 1) {
        res.send({success: true, data: []})
      } else {
        res.send({success: true, data: foundPosts})
      }
    }
  })
})

blogRoutes.get('/posts/recent', (req, res) => {
  BlogPost.find({
    sticky: {$ne: true},
    draft: {$ne: true}
  }).sort([['created', -1]]).skip(parseInt(req.query.at)).limit(parseInt(req.query.count)).exec((err, foundPosts) => {
    if (err) {
      res.send({
        success: false,
        message: err
      })
    } else if (foundPosts.length < 1) {
      res.send({
        success: true,
        data: []
      })
    } else {
      res.send({
        success: true,
        data: foundPosts
      })
    }
  })
})

blogRoutes.post('/post/new', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), (req, res) => {
  var blogPost = new BlogPost({
    title: req.body.title,
    body: req.body.body,
    sticky: req.body.sticky,
    draft: req.body.draft,
    tags: req.body.tags,
    authorId: req.user._id
  })

  blogPost.save(err => {
    if (err) {
      res.send({
        success: false,
        message: err.message
      })
    } else {
      res.send({
        success: true,
        message: 'Successfully created new blog post.',
        data: blogPost._id
      })
    }
  })
})

blogRoutes.delete('/post/:postID', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), (req, res) => {
  BlogPost.findById(req.params.postID, function (err, foundPost) {
    if (err) {
      res.send({success: false, message: err.message})
    } else if (foundPost == null) {
      res.send({success: false, message: 'No post with id ' + req.params.postID + ' found'})
    } else {
      foundPost.remove(err => {
        if (err) {
          res.send({ success: false, message: err.message })
        } else {
          res.send({ success: true, message: 'Deleted post.' })
        }
      })
    }
  })
})

blogRoutes.get('/post/:postID', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    BlogPost.findById(req.params.postID, (err, foundPost) => {
      if (err) {
        res.send({success: false, message: err})
      } else if (foundPost == null) {
        res.send({success: false, message: 'No post with id ' + req.params.postID + ' found'})
      } else if (!user && foundPost.draft) {
        res.send({success: false, message: 'Draft post ' + req.params.postID + ' requires authentication'})
      } else {
        res.send({success: true, data: foundPost})
      }
    })
    if (err) {
      res.send({success: false, message: 'An unexpected error occured.'})
    }
  })(req, res, next)
})

blogRoutes.post('/post/:postID/edit', passport.authenticate('jwt', { session: false, failureRedirect: '/api/errors/unauthorized' }), (req, res) => {
  BlogPost.findById(req.params.postID, (err, foundPost) => {
    if (err) {
      res.send({success: false, message: err.message})
    } else if (foundPost == null) {
      res.send({success: false, message: 'No post with id ' + req.params.postID + ' found'})
    } else {
      foundPost.update({
        title: req.body.title,
        body: req.body.body,
        sticky: req.body.sticky,
        draft: req.body.draft,
        tags: req.body.tags,
        lastEdited: Date.now()}
      )

      foundPost.save(function (err) {
        if (err) {
          res.send({ success: false, message: err.message })
        } else {
          res.send({ success: true, message: 'Successfully updated post.' })
        }
      })
    }
  })
})

export default blogRoutes
