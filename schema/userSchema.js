/**
 *  数据库表映射文件
 */
let {DataTypes, Model} = require('sequelize')
// 引入 sequelize 实例对象
let {sequelize} = require('../config/db')


const userSchema =sequelize.define('users', {
    // 这里定义模型属性
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    }
},{
    // 这里是其他 模型参数
    tableName:'users',
})
userSchema.sync({force: false})

module.exports = {userSchema}
