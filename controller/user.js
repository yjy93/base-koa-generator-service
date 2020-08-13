const userModel = require('../model/user')

/**
 * controller 逻辑处理层
 */

// userController
class userController {
    //  添加用户
    static async create(ctx) {
        console.log('userContruller create', ctx);
        let req = ctx.query;  //获取Get请求
        await userModel.createUser(req); //添加数据
    }
}

module.exports = userController;

