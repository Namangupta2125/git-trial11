// write usef code
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../config/auth');
// // Welcome Page
router.get('/', userController.welcome);
// Dashboard
