// const express = require('express');
// const router = express.Router();
// const productController = require('../controllers/productController.js');
// const reviewController = require('../controllers/reviewController.js');
//
// router.post('/addProduct', productController.upload, productController.addProduct);
// router.get('/getAllProduct', productController.getAllProducts);
// router.get('/published', productController.publishedProducts);
//
// router.post('/addReview/:id', reviewController.addReview);
// router.get('/allReviews', reviewController.getAllReviews);
// router.get('/getProdRev/:id', reviewController.getProductReviews);
//
// router.get('/:id', productController.getOneProduct);
//
// router.put('/:id', productController.upload, productController.updateProduct);
//
// router.delete('/:id', productController.deleteProduct);
//
// module.exports = router;


// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController.js')

// GET запрос для получения всех продуктов
router.get('/getAllProduct', productController.getAllProducts);
router.get('/:id', productController.getById);
router.delete('/:id', productController.deleteProduct);
router.put('/:id',productController.upload, productController.update);
router.post('/addProduct', productController.upload, productController.addProduct)
router.get('/getProdRev/:id', productController.getProductReviews)
// Добавьте другие маршруты для Create, Read, Update и Delete

router.post('/AddReview/:id', reviewController.AddReview)
// router.get('review/:id', productController.getProductReviews.reviews)

module.exports = router;