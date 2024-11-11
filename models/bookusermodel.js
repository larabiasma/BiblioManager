const db = require('./db');

const bookuser = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM books';
        db.query(sql, callback);
    },

    search: ({ title, author, category }, callback) => {
        let sql = 'SELECT * FROM books WHERE 1=1';
        const params = [];

        if (title) {
            sql += ' AND title LIKE ?';
            params.push(`%${title}%`);
        }
        if (author) {
            sql += ' AND author LIKE ?';
            params.push(`%${author}%`);
        }
        if (category) {
            sql += ' AND category LIKE ?';
            params.push(`%${category}%`);
        }
        db.query(sql, params, callback);
    },

    gettocard: (userID, bookID, callback) => {
        const sql = 'INSERT INTO cart (user_id, book_id) VALUES (?, ?)';
        db.query(sql, [userID, bookID], callback);
    },

    borrow: (userID, bookID, callback) => {
        const sql = 'UPDATE books SET is_borrowed = 1 WHERE id = ?';
        db.query(sql, [bookID], (err) => {
            if (err) return callback(err);
            const borrowSql = 'INSERT INTO borrows (user_id, book_id) VALUES (?, ?)';
            db.query(borrowSql, [userID, bookID], callback);
        });
    },

    payFor: (userID, paymentDetails, callback) => {
        const sql = 'INSERT INTO payments (user_id, payment_details) VALUES (?, ?)';
        db.query(sql, [userID, JSON.stringify(paymentDetails)], callback);
    }
};

module.exports = bookuser;
