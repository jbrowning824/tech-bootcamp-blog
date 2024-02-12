const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamp: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',

    }
);

module.exports = Post;