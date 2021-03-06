const express = require('express')
const setupExpress = require('./setupExpress')
const path = require('path')
const app = express()

setupExpress(express, app)

// Serve our api
app.use('/api/v1', require('./api'))

// Always return the main index.html, so react-router render the route in the client
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = app
