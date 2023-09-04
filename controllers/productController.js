// controllers/ProductController.js
const ProductModel = require('../models/productModel');
const ReviewModel = require('../models/reviewModel.js');
const multer = require('multer')
const path = require('path')





const getAllProducts=async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({error: 'An error occurred'});
    }
}
const getById = async (req, res) => {
    let id = req.params.id
    let product = await ProductModel.findById(id)
    res.status(200).send(product)
}


const update = async (req, res) => {
    const id = req.params.id;
    const updatedProductData = req.body;

    try {
        const updatedProduct = await ProductModel.update(updatedProductData, { id: id });

        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
}

const addProduct = async(req, res) => {
    let info = {
        image: req.file.path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    }
    const product = await ProductModel.create(info)
    res.status(200).send(product)
    console.log(product)
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|webp/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

const deleteProduct = async(req, res) => {
    let id = req.params.id
    await ProductModel.destroy(id)
    res.status(200).send('Product is deleted')
}

const getProductReviews = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await ProductModel.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const reviews = await ReviewModel.findByIDReview(productId);

        res.status(200).json({ product, reviews });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};


module.exports = {
    getAllProducts,
    getById,
    update,
    addProduct,
    upload,
    deleteProduct,
    getProductReviews,


}