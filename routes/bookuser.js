const express = require('express');
const router = express.Router();
const bookuser = require('../controllers/bookusercontrol');


router.get('/' , bookuser.getuserbooks);
router.get('/search' , bookuser.searchbook);
router.post('/borrow' , bookuser.borrowbook);
router.post('/gettocard' , bookuser.gettocard);
router.post('/payFor' , bookuser.payForBook);  //efectuer le paiment

module.exports = router;
