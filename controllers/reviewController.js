const db = require('../models')
const Review = db.reviews

// add Review

const AddReview = async(req, res) => {
    const id = req.params.id
    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }
    const review = await Review.create(data)
    res.status(200).send(review)
}

//get All
const getAllReviews = async(req, res) => {
    const reviews = Review.findAll({})
    res.status(200).send(reviews)
}

module.exports = {
    AddReview,
    getAllReviews
}