const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Business = db.define('business', {
    business_id: {
        type: DataTypes.INTEGER
    },
    uid: {
        type: DataTypes.STRING
    },
    country_id: {
        type: DataTypes.INTEGER
    },
    identity_id: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
})

Business.removeAttribute('id')

module.exports = Business