const express = require('express')
const router = express.Router();

const { newProduct, getProducts, getSingleProduct } = require('../controllers/productController')

router.route('/product/new').post(newProduct);

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

module.exports = router;