const router = require('koa-router')()

// 路由嵌套, 二级路由前缀
router.prefix('/users')
// 引入 userController 业务逻辑层
const userController = require('../controller/userController')

router.get('/create', userController.create)

module.exports = router
