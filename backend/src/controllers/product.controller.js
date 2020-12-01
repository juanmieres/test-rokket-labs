const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({data: products})
}

const getProductById = async (req, res) => {
    await Product.findById(req.params.id,
        function (err, docs) {
            if (err)
                res.status(400).json(err);
            res.status(200).json({
                data: docs
            });
        }
    );
}

const createProduct = async (req, res) => {
    const {name, license, location, phone} = req.body
    const product = new Product({name, license, location, phone})
    await product.save(
        function(err, result){ 
            if (err)
                res.status(400).json(err);
            res.status(201).json({
                message: 'product created',
                data: result
            });
        }
    )
}

const updateProductById = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true},
        function (err, docs) {
            if (err)
                res.status(400).json(err)
            res.status(201).json({
                message: 'product update',
                data: docs
            })
        }
    );
}

const deleteProductById = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id,
        function (err, docs) { 
            if (err)
                res.status(400).json(err)
            res.status(200).json({
                message: 'product delete',
                data: docs
            })
        }
    )
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
}