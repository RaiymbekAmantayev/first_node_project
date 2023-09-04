const ReviewModel = require('../models/reviewModel.js');
const AddReview = async (req, res) => {
    const id = req.params.id;
    const rating = req.body.rating;
    const description = req.body.description;

    // Проверяем, что все параметры определены
    if (!id || rating === undefined || description === undefined) {
        return res.status(400).json({ error: 'Invalid request parameters' });
    }

    const data = {
        product_id: id,
        rating: rating,
        description: description,
    };

    try {
        const review = await ReviewModel.addReview(data);
        res.status(200).send(review);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the review' });
    }
};

module.exports = {
    AddReview,
};
