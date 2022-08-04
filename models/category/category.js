const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Category = db.define('category', {
    department_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Category