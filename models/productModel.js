// models/ProductModel.js
const pool = require('../config/dbconfig');


class ProductModel {
    static async create({ image, title, price, description, published }) {
        const [result] = await pool.execute(
            'INSERT INTO products (image, title, price, description, published) VALUES (?, ?, ?, ?, ?)', [image, title, price, description, published]
        );

        if (result.affectedRows === 0) {
            throw new Error('Product creation failed');
        }

        const createdProductId = result.insertId;

        return { id: createdProductId, image, title, price, description, published };
    }
    static async findAll() {
        const [rows] = await pool.execute('SELECT * FROM products');
        return rows;
    }

    static async findById(id) {
        const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
        return rows[0] || null;
    }
    static async update(productId, updatedProductData) {
        const { title, price, description, published } = updatedProductData;

        const [result] = await pool.execute(
            'UPDATE products SET title = ?, price = ?, description = ?, published = ? WHERE id = ?', [title, price, description, published, productId]
        );

        if (result.affectedRows === 0) {
            throw new Error('Product not found or no changes were made');
        }

        return { message: 'Product updated successfully' };
    }
    static async destroy(productId) {
        try {
            const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [productId]);

            if (result.affectedRows === 0) {
                throw new Error('Product not found');
            }

            return { message: 'Product deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ProductModel;