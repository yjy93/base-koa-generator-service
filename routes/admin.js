const router = require('koa-router')()

// 路由嵌套, 二级路由前缀
router.prefix('/admin')

// 引入 adminController 控制层
const adminController = require('../controller/adminController')

router.get('/create', adminController.create)

module.exports = router