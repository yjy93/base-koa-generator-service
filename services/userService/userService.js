/*
 *  service 业务处理层
 **/
const userModel = require('../../model/userModel')

class userService {
    static async createUser(req) {
       await userModel.createUser(req); //添加数据
    }
}

module.exports = userService