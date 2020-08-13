const {Model, DataTypes} = require('sequelize') // 引入 Model, 引入 DataTypes 类型约束
let {sequelize} = require('../config/db') // 引入 sequelize 实例

//  Model 实体
class adminModel extends Model {
    // 基于模型创建数据
    static async createUser(data) {
        adminModel.create({
            name: data.name,
            age: data.age
        })
    }
}

module.exports = adminModel

adminModel.init({
    // 这里定义模型属性
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    }
}, {
    // 这里是其他 模型参数
    sequelize, // 关联 sequelize 实例
    tableName: 'admins',
})
adminModel.sync({force: false})