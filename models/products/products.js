const { DataTypes } = require('sequelize')
const db = require('../../database/connection')

const Products = db.define('products', {
    product_id: {
        type: DataTypes.INTEGER
    },
    uid: {
        type: DataTypes.STRING
    },
    business_id: {
        type: DataTypes.INTEGER
    },
    mark_id: {
        type: DataTypes.INTEGER
    },
    category_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    barcode: {
        type: DataTypes.STRING
    },
    reference: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    },
    img: {
        type: DataTypes.JSONB
    },
    stock: {
        type: DataTypes.INTEGER
    },
    html_url: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
})

Products.removeAttribute('id')

module.exports = Products