const Product = require('../models/product')


//create new product

exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}


//get single product 

exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Prodcut not found'
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}



// exports.getProducts = (req,res,next) =>{
//     res.status(200).json({

//     })
// }