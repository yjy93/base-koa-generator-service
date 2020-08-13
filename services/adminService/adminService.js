/*
 *  service 业务处理层
 **/
const adminModel = require('../../model/adminModel')

class adminService {
    static async createAdmin(req) {
        await adminModel.createUser(req); //添加数据
    }
}

module.exports = adminService