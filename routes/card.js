const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardcontrol');

// Afficher le panier d'un utilisateur
router.get('/:userID', cardController.viewCart);

// Ajouter un livre au panier
router.post('/add', cardController.addToCart);

// Supprimer un livre du panier
router.delete('/remove', cardController.removeFromCart);

module.exports = router;
