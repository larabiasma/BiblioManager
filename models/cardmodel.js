const db = require('./db');

const card ={
        
// Récupérer les livres dans le panier d'un utilisateur
getCartByUserID : (userID, callback) => {
    const sql = 'SELECT * FROM cart WHERE user_id = ?';
    db.query(sql, [userID], callback);
},

// Ajouter un livre au panier
addBookToCart : (userID, bookID, callback) => {
    const sql = 'INSERT INTO cart (user_id, book_id) VALUES (?, ?)';
    db.query(sql, [userID, bookID], callback);
},

// Supprimer un livre du panier
removeBookFromCart :(userID, bookID, callback) => {
    const sql = 'DELETE FROM cart WHERE user_id = ? AND book_id = ?';
    db.query(sql, [userID, bookID], callback);
}

};
module.exports = card;