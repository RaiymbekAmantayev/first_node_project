// models/ReviewModel.js
const pool = require('../config/dbconfig');

class ReviewModel {
    static async findAllByProductId(productId) {
        const [rows] = await pool.execute('SELECT * FROM reviews WHERE product_id = ?', [productId]);
        return rows;
    }

    static async findByIDReview(productId){
            const [rows] = await pool.execute('SELECT * FROM reviews WHERE product_id = ?', [productId]);
            return rows;
        }
    static async addReview(reviewData) {
        try {
            const { product_id, rating, description } = reviewData;

            // Выполнить SQL-запрос для добавления отзыва в базу данных
            const [result] = await pool.execute(
                'INSERT INTO reviews (product_id, rating, description) VALUES (?, ?, ?)',
                [product_id, rating, description]
            );

            if (result.affectedRows === 1) {
                // Отзыв успешно добавлен
                return { message: 'Review added successfully' };
            } else {
                throw new Error('Failed to add review');
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ReviewModel;


