const db = require('../models')
const Product = db.products
const Review = db.reviews
    //1. create Product 
const addProduct = async(req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

//2. get all products
const getAllProducts = async(req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//3. get one product
const getOneProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })
    res.status(200).send(product)
}

//4. update product
const upadateProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)
}

//5. delete product by id
const deleteProduct = async(req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send('Product is deleted')
}

//6. get published product
// const publishedProduct = async(req, res) => {
//     const products = await Product.findAll({ where: { published: true } })
//     res.status(200).send(products)
// }

const publishedProduct = async(req, res) => {
    try {
        const products = await Product.findAll({ where: { published: true } });
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }

}

const getProductReviews = async(req, res) => {
    const id = req.params.id
    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where:{id: id}
    })
    res.status(200).send(data)
}


module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    upadateProduct,
    deleteProduct,
    publishedProduct,
    getProductReviews
}