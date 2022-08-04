const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Department = db.define('category', {
    business_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Department