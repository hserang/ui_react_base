const router = require('express').Router()

router.get('/msg', function(req, res) {
  if (Math.random() >= 0.5) {
    return res.status(200).send({ msg: '/about/msg said: evrything ok in about API ;)' })
  } else {
    return res.status(500).send({ msg: '/about/msg said: something went wrong in about API :(' })
  }
})

module.exports = router
