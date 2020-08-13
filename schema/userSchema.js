/**
 *  数据库表映射文件
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users',
        {
            name:{
                type: DataTypes.STRING,
                allowNull: true,
                field:'name'
            },
            age:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field:'age'
            }
        }
    )
}

