const router = require('express').Router()

router.get('/msg', function(req, res) {
  if (Math.random() >= 0.5) {
    return res.status(200).send({ msg: '/home/msg said: evrything ok in home API ;)' })
  } else {
    return res.status(500).send({ msg: '/home/msg said: something went wrong in home API :(' })
  }
})

module.exports = router
