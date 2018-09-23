import express from 'express'

import BlogPost from '../models/BlogPost'

import blogRoutes from './blogRoutes'
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'

export default function apiRoutes (app) {
  // API routes.
  var apiRoutes = express.Router()

  // Health route for OpenShift monitoring.
  app.get('/health', (req, res) => {
    res.json({ success: true, message: 'success' })
  })

  apiRoutes.get('/errors/unauthorized', (req, res) => {
    res.json({ success: false, message: 'unauthorized' })
  })

  // Set url for API group routes.
  apiRoutes.use('/blog', blogRoutes)
  apiRoutes.use('/auth', authRoutes)
  apiRoutes.use('/user', userRoutes)
  // apiRoutes.use('/debug', require('./debug')); //There's probably a variable I can use to enable this.
  app.use('/api', apiRoutes)

  app.get('/blog/rss.xml', (req, res) => {
    BlogPost.find().sort([['created', -1]]).exec((err, foundPosts) => {
      var rssRes =
          '<?xml version="1.0" encoding="UTF-8"?>\r\n' +
          '<rss version="2.0">\r\n' +
          '  <channel>\r\n' +
          "    <title>Alex Newark's Blog</title>\r\n" +
          '    <link>http://alexnewark.co.uk/blog</link>\r\n' +
          '    <description></description>\r\n' +
          '    <language>en-us</language>\r\n' +
          '    <pubDate>' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '</pubDate>\r\n' +
          '    <lastBuildDate>' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '</lastBuildDate>\r\n'

      var rssClose =
          '    </channel>\r\n' +
          '</rss>'

      if (err) {
        console.log(err)
        res.send(rssRes + rssClose)
      } else {
        foundPosts.forEach(blogPost => {
          rssRes = rssRes +
              '    <item>\r\n' +
              '      <title>' + blogPost.title + '</title>\r\n' +
              '      <link>http://alexnewark.co.uk/blog/post/' + blogPost._id + '</link>\r\n' +
              '      <description></description>\r\n' +
              '      <pubDate>' + blogPost.created + '</pubDate>\r\n' +
              '      <guid isPermaLink="true">http://alexnewark.co.uk/blog/post/' + blogPost._id + '</guid>\r\n' +
              '    </item>\r\n'
        })
        res.send(rssRes + rssClose)
      }
    })
  })
}
