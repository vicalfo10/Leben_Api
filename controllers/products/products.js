const {  request, response } = require('express')
const { v4: uuidv4 } = require('uuid')

const Product = require('../../models/products/products')

const getProducts = async( req = request, res = response ) => {

    try {

        const products = await Product.findAll()
        /*const products = await Product.findOne({
            where: {
                uid: '16d7554e-5a47-4e95-92gg-546d8748635b'
            }
        })*/

        res.status(200).json({
            body: {
                products
            }
        })
        
    } catch (error) {
        
        console.log( error )
        res.status(500).json({
            msg: 'Something went wrong in the query'
        })
    }

}

const postProducts = async( req = request, res = response ) => {

    const { body } = req

    try {

        const existBarcode = await Product.findOne({
            where: {
                barcode: body.barcode
            }
        })

        if (existBarcode) {
            return res.status(400).json({
                msg: `Código de barras ${body.barcode} ya registrado`
            })
        }

        body.uid = uuidv4()

        const products = new Product(body)
        await products.save()

        res.status(201).json({
            body: {
                products
            }
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