const bookuser = require('../models/bookusermodel');

// Affichage de tous les livres
exports.getuserbooks = (req, res) => {
    bookuser.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

// Chercher un livre
exports.searchbook = (req, res) => {
    const { title, author, category } = req.query;
    bookuser.search({ title, author, category }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

// Ajouter un livre au panier
exports.gettocard = (req, res) => {
    const { userID, bookID } = req.body;
    bookuser.gettocard(userID, bookID, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Livre ajouté au panier' });
    });
};

// Emprunter un livre
exports.borrowbook = (req, res) => {
    const { userID, bookID } = req.body;
    bookuser.borrow(userID, bookID, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Livre emprunté avec succès' });
    });
};

// Effectuer un paiement
exports.payForBook = (req, res) => {
    const { userID, paymentDetails } = req.body;
    bookuser.payFor(userID, paymentDetails, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Paiement effectué avec succès' });
    });
};
