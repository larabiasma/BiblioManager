const express = require('express');
const router = express.Router();
const usercontrol = require('../controllers/usercontrol');

router.get ('/' , usercontrol.getUsers);
router.post ('/registre' , usercontrol.registreUser);


module.exports = router;
