const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')

module.exports = function(express, app) {
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
