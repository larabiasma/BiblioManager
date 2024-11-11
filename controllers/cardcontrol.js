const cardModel = require('../models/cardModel');

// Afficher le panier d'un utilisateur
exports.viewCart = (req, res) => {
    const userID = req.params.userID;
    cardModel.getCartByUserID(userID, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

// Ajouter un livre au panier
exports.addToCart = (req, res) => {
    const { userID, bookID } = req.body;
    cardModel.addBookToCart(userID, bookID, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Livre ajouté au panier' });
    });
};

// Supprimer un livre du panier
exports.removeFromCart = (req, res) => {
    const { userID, bookID } = req.body;
    cardModel.removeBookFromCart(userID, bookID, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Livre supprimé du panier' });
    });
};
