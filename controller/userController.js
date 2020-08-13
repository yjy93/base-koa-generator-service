const userModel = require('../model/userModel')
const userService = require('../services/userService/userService')

/**
 * controller 控制层
 */
class userController {
    //  添加用户
    static async create(ctx) {
        let req = ctx.query;  //获取Get请求
         await userService.createUser(req)

    }
}

module.exports = userController;

