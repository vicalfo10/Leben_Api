const {  request, response } = require('express')
const Product = require('../../models/products/products')

const getProducts = async( req = request, res = response ) => {

    try {

        const products = await Product.findAll()

        res.status(200).json({
            products
        })
        
    } catch (error) {
        
        console.log( error )
        res.status(500).json({
            msg: 'Something went wrong in the query'
        })
    }

}

const postProducts = async( req = request, res = response ) => {

    try {

        res.json({
            msg: 'postProducts'
        })
        
    } catch (error) {
        
        console.log( error )
        res.status(500).json({
            msg: 'Something went wrong in the query'
        })
    }

}

const putProducts = async( req = request, res = response ) => {

    try {

        res.json({
            msg: 'putProducts'
        })
        
    } catch (error) {
        
        console.log( error )
        res.status(500).json({
            msg: 'Something went wrong in the query'
        })
    }

}

const deleteProducts = async( req = request, res = response ) => {

    try {

        res.json({
            msg: 'deleteProducts'
        })
        
    } catch (error) {
        
        console.log( error )
        res.status(500).json({
            msg: 'Something went wrong in the query'
        })
    }

}

module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts
}