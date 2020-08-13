/*
 * mysql数据库 的配置文件
 */

let {Sequelize, Model, DataTypes} = require("sequelize")
let sequelize = new Sequelize('node_study', 'root', 'root', { // 数据库名    用户名   密码
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        //字符集
        charset: 'utf8mb4',
        // collate: 'utf8mb4_unicode_ci', // 注释掉无用的配置, 否则会警告, 将来可能会报错
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});
module.exports = {
    sequelize
};
