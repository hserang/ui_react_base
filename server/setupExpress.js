const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')

module.exports = function(express, app) {
  // security setup start
  // keep this on top of midelware chain
  app.use(helmet())
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'unsafe-inline'"],
        imgSrc: ["'self'"],
        connectSrc: ["'none'"],
        fontSrc: ["'self'"],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'"]
      }
    })
  )
  app.use(function(req, res, next) {
    let item
    for (item in req.body) {
      req.sanitize(item).escape()
    }
    for (item in req.params) {
      req.sanitize(item).escape()
    }
    for (item in req.query) {
      req.sanitize(item).escape()
    }
    for (item in res.body) {
      req.sanitize(item).escape()
    }
    for (item in res.params) {
      req.sanitize(item).escape()
    }
    for (item in res.query) {
      req.sanitize(item).escape()
    }
    next()
  })
  // security setup end

  app.use(cookieParser())
  app.use(
    session({ secret: 'choose_this_secret_key_wisely', resave: false, saveUninitialized: false })
  )
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // json parser
  app.use(bodyParser.json())
  // Serve static assets
  app.use(express.static(path.join(__dirname, 'build')))
}
