const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Detail = db.define('category', {
    product_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Detail