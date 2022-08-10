const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Country = db.define('country', {
    country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    currency: {
        type: DataTypes.STRING
    },
    codearea: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.JSON
    },
    position: {
        type: DataTypes.INTEGER
    },
    state: {
        type: DataTypes.BOOLEAN
    }
})

Country.removeAttribute('id')

module.exports = Country