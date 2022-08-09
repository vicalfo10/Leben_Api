const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Department = db.define('department', {
    department_id: {
        type: DataTypes.INTEGER
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

Department.removeAttribute('id')

module.exports = Department