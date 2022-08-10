const { Router } = require('express')
const { check } = require('express-validator')

const { validationFiels } = require('../../middlewares/validation-fields')
const { getProducts,
        postProducts,
        putProducts,
        deleteProducts } = require('../../controllers/products/products')

const router = Router()

router.get( '/products', [], getProducts )

router.post( '/products', [
    check( 'name' )
        .not().isEmpty()
        .withMessage( 'El nombre es obligatorio.' )
        .isLength({ min: 2, max: 80 })
        .withMessage( 'Mínimo 2 y máximo 80 caracteres.' ),

    validationFiels
], postProducts )

router.put( '/products', [], putProducts )

router.delete( '/products', [], deleteProducts )

module.exports = router