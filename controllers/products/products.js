const {  Request, Response } = require('express')
const { v4: uuidv4 } = require('uuid')

const Product = require('../../models/products/products')

const getProducts = async( req = Request, res = Response ) => {

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

const postProducts = async( req = Request, res = Response ) => {

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

const putProducts = async( req = Request, res = Response ) => {

    const { uuid } = req.query
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

        const products = await Product.findOne({
            where: {
                uid: uuid
            }
        })
        
        if ( !products ) {
            return res.status(404).json({
                msg: `No existe el producto con el identificador ${ uuid }`
            })
        }

        await products.update({ category_id:    body.category_id, 
                                name:           body.name,
                                barcode:        body.barcode,
                                reference:      body.reference,
                                price:          body.price,
                                img:            body.img,
                                stock:          body.stock,
                                html_url:       body.html_url,
                                state:          body.state
                             })

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

const deleteProducts = async( req = Request, res = Response ) => {

    const { uuid } = req.query

    try {

        const products = await Product.findOne({
            where: {
                uid: uuid
            }
        })
        
        if ( !products ) {
            return res.status(404).json({
                msg: `No existe el producto con el identificador ${ uuid }`
            })
        }

        await products.update({ state: false })

        res.json({
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

module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts
}