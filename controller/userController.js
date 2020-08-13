/**
 * controller 控制层
 */

const userModel = require('../model/userModel')
const userService = require('../services/userService/userService')


class userController {
    //  添加用户
    static async create(ctx) {
        console.log('userContruller create', ctx);
        let req = ctx.query;  //获取Get请求
        await userService.createUser(req)
    }
}

module.exports = userController;

