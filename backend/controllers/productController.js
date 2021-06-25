const Product = require('../models/product')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures');

//create new product

exports.newProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);
    // console.log(product);
    res.status(201).json({
        success: true,
        product
    })
})

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()

    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        products
    })
})


//get single product 

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
})
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })

})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: 'Product is deleted!'

    })
})

// exports.getProducts = (req,res,next) =>{
//     res.status(200).json({

//     })
// }