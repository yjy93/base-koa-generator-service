const {userSchema} = require('../schema/userSchema')

//  操作数据库的类 Model
class userModel {
    // 基于模型创建数据
    static async createUser(data) {
        return await userSchema.create({
            name: data.name,
            age: data.age
        })
    }
}
module.exports = userModel