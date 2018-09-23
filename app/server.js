// Grab packages
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import passport from 'passport'

import './utils/jwtStrategy'
import apiRoutes from './routes/apiRoutes'
import config from './utils/config'

const app = express()

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

// Get POSTS with body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// log requests.
app.use(morgan('combined'))

// Initialize passport.
app.use(passport.initialize())

// To prevent errors from Cross Origin Resource Sharing, we will set
// our headers to allow CORS with middleware like so:
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Authorization')
  // and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// Connect to db
mongoose.connect(config.DATABASE_URI, { useNewUrlParser: true })

app.use('/', express.static('./app/front'))
app.use('/manifest.json', express.static('./app/front/manifest.json'))
app.use('/asset-manifest.json', express.static('./app/front/asset-manifest.json'))
app.use('/service-worker.js', express.static('./app/front/service-worker.js'))
app.use('/static', express.static('./app/front/static'))

// Require routes.
apiRoutes(app)
app.use('/static', express.static('./app/static'))

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something bad happened!')
})

app.use('*', (req, res) => {
  res.sendfile('./app/front/index.html')
})

app.listen(port, ip)
console.log('server started on ' + ip + ':' + port)
