//引入db mysql配置
const db = require('../config/db')
//引入 sequelize 对象
const Sequelize = db.sequelize

//引入数据表模型
const userSchema = Sequelize.import('../schema/userSchema');

//自动创建表
userSchema.sync({force:true});

//  操作数据库的类
class userModel{
    // 基于模型创建数据
    static async createUser(data) {
        return await userSchema.create({
            name: data.name,
            age: data.age
        })
    }
}

module.exports = userModel
