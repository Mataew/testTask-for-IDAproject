const { Router } = require('express')
const { productController } = require('../Controllers/ProductControllers')
const router = Router()

router.get('/products', productController.getProduct)
router.post('/products', productController.addProduct)
router.delete('/products/:id', productController.deleteProduct)

module.exports = router