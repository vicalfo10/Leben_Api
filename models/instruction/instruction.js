const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Instruction = db.define('instruction', {
    instruction_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

Instruction.removeAttribute('id')

module.exports = Instruction