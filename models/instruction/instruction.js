const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Instruction = db.define('category', {
    name: {
        type: DataTypes.STRING
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Instruction