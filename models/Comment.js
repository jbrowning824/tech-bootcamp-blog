const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

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
            }        
        },
        createdAt: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATETIME
        },

    },
    {
       sequalize,
       timestamp: true,
       freezeTableName: true,
       underscored: true,
       modelName: 'comment',
    });

    modules.export = Comment;