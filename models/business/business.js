const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Business = db.define('business', {
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

module.exports = Business