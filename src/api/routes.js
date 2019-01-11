var Router = require('express').Router
var router = new Router()

router.route('/').get((req, res) => {
  res.send({ message: 'Welcome to the job-finder API!' })
})

router.use('/jobs', require('./job/router' ))

module.exports = router