// import controllers
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

// router
const router = require('express').Router()

// use routers
router.post('/addProduct', productController.addProduct)
router.get('/getAllProduct', productController.getAllProducts)
router.get('/published', productController.publishedProduct)


// Review routers

router.post('/AddReview/:id', reviewController.AddReview)
router.get('/allReviews', reviewController.getAllReviews)

// get product reviews
router.get('/getProdRev/:id', productController.getProductReviews)




// Product router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.upadateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router