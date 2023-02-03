const express = require('express');
const router = express.Router();
const {register, login, registerView, loginView} = require('../controllers/authController');

router.get('/registration', registerView);
router.post('/register', register);
router.get('/', loginView);
router.post('/', login);




module.exports = router;