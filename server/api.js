const api = (module.exports = require('express').Router())
const home = require('./routes/v1/home')
const about = require('./routes/v1/about')
api.use('/home', home)
api.use('/about', about)
