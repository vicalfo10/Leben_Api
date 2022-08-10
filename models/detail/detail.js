const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Detail = db.define('detail', {
    detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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

Detail.removeAttribute('id')

module.exports = Detail