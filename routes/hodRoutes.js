const express = require('express');
const router = express.Router();
const hodController = require('../controllers/hodController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const { isHOD } = require('../middleware/roleMiddleware');

// Dashboard
router.get('/dashboard', isAuthenticated, isHOD, hodController.dashboard);

// Assign guide
router.post('/assign-guide', isAuthenticated, isHOD, hodController.assignGuide);

// Final approval
router.post('/final-approval', isAuthenticated, isHOD, hodController.finalApproval);

module.exports = router;
