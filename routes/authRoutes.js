const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login/Register views
router.get('/login', (req, res) => res.render('auth/login'));
router.get('/register', (req, res) => res.render('auth/register'));

// Logic
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/logout', authController.logout);

module.exports = router;
