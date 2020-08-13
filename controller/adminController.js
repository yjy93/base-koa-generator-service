const userModel = require('../model/userModel')
const adminService = require('../services/adminService/adminService')

/**
 * controller 控制层
 */
class adminController {
    //  添加用户
    static async create(ctx) {
        let req = ctx.query;  //获取Get请求
        await adminService.createAdmin(req)
    }
}

module.exports = adminController;

