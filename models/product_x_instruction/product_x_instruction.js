const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Prod_x_Instr = db.define('product_x_instruction', {
    prin_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    instruction_id: {
        type: DataTypes.INTEGER
    },
    sate: {
        type: DataTypes.BOOLEAN
    }
})

Prod_x_Instr.removeAttribute('id')

module.exports = Prod_x_Instr