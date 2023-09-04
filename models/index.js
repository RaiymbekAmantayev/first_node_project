// const dbConfig = require('../config/dbconfig.js')
//
//
// const  db = {}
// db.ReviewModel = require('../models/reviewModel');
// db.ProductModel = require('../models/productModel');
//
// db.ProductModel.hasMany(db.ReviewModel, {
//     foreignKey: 'product_id',
//     as: 'review'
// })
//
// db.ReviewModel.belongsTo(db.ProductModel, {
//     foreignKey: 'product_id',
//     as: 'product'
// })
//
// module.exports = db