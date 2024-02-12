const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

class Post extends Model {}

Model.Init (
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
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        createdAt: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        updatdAt: {
            type: DataTypes.DATETIME,
            allowNull: false,
        }
    },
    {
        sequalize,
        timestamp: true,
        freezeTable: true,
        underscored: true,
        modelName: 'post',

    }
);

module.exports = Post;