var controller = require('./controller');
var Router = require('express').Router
var router = new Router()

var Job = require('./repository');

router.route('/')
    .get(controller.find)
    .post(controller.post)

router.route('/:_id')
    .get(controller.findOne)
    .put(controller.update)
    .delete(controller.remove)

module.exports = router