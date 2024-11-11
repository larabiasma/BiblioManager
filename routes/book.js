const express = require('express');
const router = express.Router();
const bookcontrol = require('../controllers/bookcontrol');

router.get('/', bookcontrol.getBooks);
router.post('/add', bookcontrol.addBook);
router.put('/update/:id', bookcontrol.updateBook);
router.delete('/delete/:id', bookcontrol.deleteBook);

module.exports = router;
