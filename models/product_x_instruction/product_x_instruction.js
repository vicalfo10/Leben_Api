const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Prod_x_Instr = db.define('category', {
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

module.exports = Prod_x_Instr