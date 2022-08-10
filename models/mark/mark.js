const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Mark = db.define('mark', {
    mark_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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

Mark.removeAttribute('id')

module.exports = Mark