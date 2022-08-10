const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Category = db.define('category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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

Category.removeAttribute('id')

module.exports = Category