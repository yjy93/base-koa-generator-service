const {Model,DataTypes} = require('sequelize')
let {sequelize} = require('../config/db')

//  操作数据库的类 Model
class adminModel extends Model {
    // 基于模型创建数据
    static async createUser(data) {
        // return await userSchema.create({
        //     name: data.name,
        //     age: data.age
        // })
        adminModel.create({
            name: data.name,
            age:data.age
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
adminModel.sync({force:false})