const router = require('koa-router')()

router.prefix('/users')

const userController = require('../controller/user') //调用业务controller
router.get('/create', userController.create)

module.exports = router
