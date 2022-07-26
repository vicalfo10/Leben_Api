const { Sequelize } = require('sequelize')

const db = new Sequelize( process.env.DATABASE_BD, process.env.USER_BD, process.env.PASS_BD, {
    host: process.env.HOST_BD,
    dialect: process.env.DIALECT,
    //logging: false
})

module.exports = db