const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// routes
router.get('/', productController.getProducts)
router.get('/:id', productController.updateProductById)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)

module.exports = router;