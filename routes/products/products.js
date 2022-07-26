const { Router } = require('express')
const { getProducts,
    postProducts,
    putProducts,
    deleteProducts } = require('../../controllers/products/products')

const router = Router()

router.get( '/products', [], getProducts )
router.post( '/products', [], postProducts )
router.put( '/products', [], putProducts )
router.delete( '/products', [], deleteProducts )

module.exports = router