const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const { isGuide } = require('../middleware/roleMiddleware');

// Dashboard
router.get('/dashboard', isAuthenticated, isGuide, guideController.dashboard);

// View projects
router.get('/project-approvals', isAuthenticated, isGuide, guideController.getProjectsToReview);

// Approve or reject project
router.post('/update-status', isAuthenticated, isGuide, guideController.updateProjectStatus);

module.exports = router;
